import pandas as pd

# 读取 file1 和 file2
file1 = pd.read_excel('./多种翻译版本的校对.xlsx',index_col='英文')
target = pd.read_excel('./创作平台所有的翻译v2.xlsx')

# 将 file1 的 '英文' 列和 '中文(DM)' 列转换为映射字典
mapping = file1['中文(DM)'].to_dict()
print(mapping['view'])

# 如果 'tid_origin' 列的值在映射字典中，则替换 'zh_cn' 列的值
target['zh_cn'] = target['tid_origin'].map(mapping).fillna(target['zh_cn'])

# 将结果写入新的 Excel 文件
target.to_excel('校对后的文件.xlsx', index=False)