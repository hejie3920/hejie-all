# 抓取基金
import json
import requests
from bs4 import BeautifulSoup
import pandas as pd

# Enter your fund codes here
fund_codes = ['005827', '161725', '004854',
              '165520',
              '013943',
              '501058',
              '004753',
              '161726',
              '001027',
              '000596',
              '012769',
              '001856',
              '001500',
              '260108',
              '009571',
              '320007',
              '003096',
              '014130',
              # '014978',
              ]


def get_fund_estimation(fund_code):
    try:
        url = f'http://fundgz.1234567.com.cn/js/{fund_code}.js'
        response = requests.get(url)
        parts = response.text.split('jsonpgz(')
        if len(parts) < 2:
            print(
                f"Unexpected response for fund code {fund_code}: {response.text}")
            return None
        data = parts[1][:-2]
        data = data.rstrip(');')  # remove trailing ");"
        data = json.loads(data)  # convert string to dictionary
        return data['name'], float(data['gszzl'])  # return name and estimation
    except:
        print(fund_code+'请求错误')


fund_estimations = {}
for fund_code in fund_codes:
    result = get_fund_estimation(fund_code)
    if result is not None:
        name, estimation = result
        # store both name and estimation
        fund_estimations[fund_code] = (name, estimation)
# sort fund_estimations by estimation
sorted_funds = sorted(fund_estimations.items(),
                      key=lambda x: x[1][1], reverse=True)

# print results
for fund_code, (name, estimation) in sorted_funds:
    # print with "--" as separator
    print(f'{fund_code} -- {name} ===== {str(estimation)}')

# import re
# import requests
# import json
# import execjs
# import pandas as pd

# def get_fund_info(code):
#     url = f'http://fund.eastmoney.com/pingzhongdata/{code}.js?version=20230801'
#     content = requests.get(url).text

#     fund_name_pattern = re.compile(r'var fS_name = "(.*?)";')
#     fund_code_pattern = re.compile(r'var fS_code = "(.*?)";')
#     fund_net_worth_trend_pattern = re.compile(r'var Data_netWorthTrend = (.*?);')

#     fund_name = re.findall(fund_name_pattern, content)[0]
#     fund_code = re.findall(fund_code_pattern, content)[0]
#     fund_net_worth_trend_str = re.findall(fund_net_worth_trend_pattern, content)[0]

#     ctx = execjs.compile("""
#         function parse_str(str) {
#             return JSON.parse(str)
#         }
#     """)
#     fund_net_worth_trend = ctx.call("parse_str", fund_net_worth_trend_str)
#     last_net_worth = fund_net_worth_trend[-1]['equityReturn']

#     return [fund_code, fund_name, last_net_worth]

# codes  = ['005827', '161725','004854',
# '270023',
# '014978',
# '165520',
# '013943',
# '501058',
# '004753',
# '161726',
# '001027',
# '000596',
# '012769',
# '001856',
# '001500',
# '260108',
# '009571',
# '320007',
# '003096',
# '014978',
# ]

# fund_data = []
# for code in codes:
#     fund_info = get_fund_info(code)
#     fund_data.append(fund_info)

# df = pd.DataFrame(fund_data, columns=['基金代码', '基金名称', '最新的净值回报'])
# df.set_index('基金代码', inplace=True)
# df.sort_values('最新的净值回报', ascending=False, inplace=True)
# pd.set_option('display.unicode.ambiguous_as_wide', True)
# pd.set_option('display.unicode.east_asian_width', True)
# print(df)
