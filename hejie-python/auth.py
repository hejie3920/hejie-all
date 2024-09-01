import subprocess
import time
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 检查是否有 Chrome 实例在调试端口运行
def is_chrome_running(port):
    try:
        response = requests.get(f"http://127.0.0.1:{port}/json")
        return response.status_code == 200
    except requests.ConnectionError:
        return False

# 调试端口号
DEBUGGING_PORT = 9230

# 启动 Chrome 并启用远程调试端口（如果没有已运行的实例）
chrome_process = None
if not is_chrome_running(DEBUGGING_PORT):
    chrome_path = "/Applications/Google Chrome Dev.app/Contents/MacOS/Google Chrome Dev"
    user_data_dir = "/Users/game-netease/Library/Application Support/Google/Chrome"

    chrome_command = [
        chrome_path,
        f"--remote-debugging-port={DEBUGGING_PORT}",
        f"--user-data-dir={user_data_dir}",
        "--disable-gpu",
        "--disable-software-rasterizer"
    ]

    # 启动 Chrome
    chrome_process = subprocess.Popen(chrome_command)

    # 等待一段时间以确保 Chrome 启动完成
    time.sleep(2)

try:
    print('开始执行')

    # 设置Chrome浏览器选项
    chrome_options = Options()
    chrome_options.add_experimental_option("debuggerAddress", f"127.0.0.1:{DEBUGGING_PORT}")  # 连接到远程调试端口

    # 指定ChromeDriver路径
    chrome_driver_path = "/usr/local/bin/chromedriver/chromedriver"  # 确保路径正确
    driver = webdriver.Chrome(executable_path=chrome_driver_path, options=chrome_options)

    # 打开本地页面
    local_url = "http://127.0.0.1:3000/homepage"
    driver.get(local_url)

    # 等待一段时间以观察是否重定向
    time.sleep(2)

    print(driver.current_url, local_url)

    # 检查当前URL是否仍然是本地URL
    if driver.current_url != local_url:
        print("登录信息过期了，开始执行覆写操作")
        
        # 打开指定的URL以获取cookies
        url = "https://dreammaker-test.netease.com/homepage"
        driver.get(url)

        # 等待页面加载
        time.sleep(2)  # 根据实际情况调整等待时间

        # 获取当前的所有 cookies
        cookies = driver.get_cookies()
        # 修改特定的 cookies 的 domain 为 127.0.0.1 并设置
        for cookie in cookies:
            if cookie['name'] in ['ACCESS_TOKEN', 'AUTH_TOKEN', 'AUTH_USER']:
                new_cookie = cookie.copy()
                print(new_cookie)
                new_cookie['domain'] = '127.0.0.1'
                # 使用 JavaScript 创建和设置 cookie
                # driver.execute_script(f"document.cookie = '{new_cookie['name']}={new_cookie['value']}; domain={new_cookie['domain']}; path=/';")
                driver.add_cookie(new_cookie)
        driver.get(local_url)

        # 验证 cookie 是否设置成功
        # for cookie in driver.get_cookies():
        #     print(cookie)
    else:
        print("登录信息未过期，无需覆写")

    # 关闭并退出浏览器
    driver.quit()

except Exception as e:
    print(f"An error occurred: {e}")

finally:
    # 如果新启动了 Chrome 进程，关闭它
    if chrome_process is not None:
        chrome_process.terminate()