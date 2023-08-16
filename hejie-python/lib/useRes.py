import requests
import json
import re

# 定义头部信息
headers = {
    'Yifan_token': '0b5fe11ceeaa4432d94535d578466de2'
}

# 缓存变量
cache = ''


def useLan(path, url, lan='en'):
    global cache
    # 发送带有头部信息的 GET 请求
    response = cache if bool(cache) else requests.get(url, headers=headers)
    with open(path, 'r') as file:
        file_data = file.read()

    # 检查请求是否成功
    if response.status_code == 200:
        cache = response
        # 获取响应的数据中的 'data.records'
        data = response.json()
        records = data.get('data', {})[0].get('data')
        print(records)
        if records is not None:
            # 创建字典列表
            dict_list = [{record['tid']: [record.get(
                'en', {}), record.get(
                'ja', {})]} for record in records]
            # 读取文件

            # # 遍历字典列表
            for dictionary in dict_list:
                for key, value in dictionary.items():
                    # 在文件中查找对应的键
                    regex = re.compile(f'({key}:.*?)(`[^`]*`)')
                    matches = regex.findall(file_data)
                    _val = value[0] if lan == 'en' else value[1]
                    if matches:
                        # 将文件中的值替换为字典中的值
                        for match in matches:
                            file_data = file_data.replace(
                                match[1], f'`{_val} `' if lan == 'en' else f'`{_val}`')

            # 写回文件
            with open(path, 'w') as file:
                file.write(file_data)
                print('done')
        else:
            print('未找到 "data.records"')
    else:
        print('请求失败，状态码：', response.status_code)


useLan('./en_US.ts', 'https://yifan.nie.netease.com/api/yifan-task/translator_data?project=artist&classification=1&force=1&file_type=0&file_names=DreamMaker%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2_0622')
useLan('./ja_JP.ts', 'https://yifan.nie.netease.com/api/yifan-task/translator_data?project=artist&classification=1&force=1&file_type=0&file_names=DreamMaker%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2_0622', 'ja')
