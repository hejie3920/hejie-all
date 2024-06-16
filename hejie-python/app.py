from flask import Flask, render_template
import mplfinance as mpf
import pandas as pd
import tushare as ts
import os
import datetime
import matplotlib

matplotlib.use('Agg')
app = Flask(__name__)

# 设置Tushare token
token = "b7f1dbf8b53a1f8d145653922509d04d33b4adc4aaee3c378d602027"
ts.set_token(token)
pro = ts.pro_api()


# 生成K线图并保存


def generate_k_line(stock_code):
    today = datetime.datetime.today()
    start_date = (today - datetime.timedelta(days=90)
                  ).strftime('%Y%m%d')  # 90天前，以确保有足够的交易日
    end_date = today.strftime('%Y%m%d')  # 当前日期

    data = pro.daily(ts_code=stock_code,
                     start_date=start_date, end_date=end_date)
    data.index = pd.to_datetime(data['trade_date'])
    data = data.sort_index()

    # 转换数据格式以适应mplfinance
    data = data[['open', 'high', 'low', 'close', 'vol']]
    data.columns = ['Open', 'High', 'Low', 'Close', 'Volume']

    # 指定图片保存路径
    img_path = f'static/{stock_code}.png'
    mpf.plot(data, type='candle', style='charles',
             volume=True, savefig=img_path)
    return img_path


@app.route('/')
def index():
    filtered_stocks_info = get_filtered_stocks_with_details(
        ['002325'])  # 假设这个函数已经实现，返回详细信息
    for stock_info in filtered_stocks_info:
        stock_code = stock_info['code']
        img_path = generate_k_line(stock_code)
        stock_info['img_path'] = img_path  # 将图片路径添加到字典中
    return render_template('index.html', stocks=filtered_stocks_info)


def get_filtered_stocks_with_details(stock_codes):
    """
    根据传入的股票代码数组，查询并返回股票的详细信息。
    :param stock_codes: 股票代码列表，例如 ['000001.SZ', '000002.SZ']
    :return: 包含股票详细信息的字典列表
    """
    # 准备返回的列表
    details_list = []

    # 遍历股票代码，查询每只股票的详细信息
    for code in stock_codes:
        # 由于这个示例中没有实际的API调用来获取最新单价和涨跌幅，这里使用假数据
        # 实际应用中，你需要根据Tushare的API来获取相应的数据
        # 假设获取到的股票名称、最新单价、涨跌幅如下：
        stock_info = pro.query('stock_basic', ts_code=code,
                               fields='ts_code,name')
        if not stock_info.empty:
            stock_name = stock_info.loc[0, 'name']  # 假设获取到的股票名称
            # 以下是模拟数据
            price = 10.0  # 假设的最新单价
            change = '1.0%'  # 假设的涨跌幅
            # 添加到返回列表中
            details_list.append({
                'code': code,
                'name': stock_name,
                'price': price,
                'change': change,
                'img_path': ''  # 图片路径暂时为空，后续可以根据需要生成并填充
            })

    return details_list


if __name__ == '__main__':
    app.run(debug=True)
