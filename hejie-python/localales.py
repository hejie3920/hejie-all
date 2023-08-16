# dm梳理翻译
import openpyxl
import re


def replace_keys(path):
    # 打开文件，读取内容
    with open(path, 'r') as file:
        data = file.read()
    # 使用replace函数替换所有的双引号为反引号
    data = data.replace('"', '`')
    # 打开文件，写入更新后的内容
    with open(path, 'w') as file:
        file.write(data)


replace_keys('../zh_CN.ts')
replace_keys('../ja_JP.ts')
replace_keys('../en_Us.ts')
print('替换为`成功!，开始解析')

# True是增量模式，只会到处这次新增需要翻译的词，False是全量模式，直接zh_CN.ts里面有多少key就有多少条
# 增量模式下，每次运行后会把最终keys列表更新一遍，
expect = False
# 读取 TypeScript 文件
with open("../zh_CN.ts", "r", encoding="utf-8") as zh_file, \
        open("../ja_JP.ts", "r", encoding="utf-8") as ja_file, \
        open("../en_US.ts", "r", encoding="utf-8") as en_file, \
        open("./已经翻译过的keys.ts", "r", encoding="utf-8") as keys_file:
    zh_content = zh_file.read()
    ja_content = ja_file.read()
    en_content = en_file.read()
    keys_content = keys_file.read()

# 使用正则表达式提取键值
pattern = re.compile(r"(\w+)\s*:", re.MULTILINE)
keys = pattern.findall(zh_content)

# 提取 keys.ts 中的键值
keys_pattern = re.compile(r"'(\w+)'", re.MULTILINE)
existing_keys = keys_pattern.findall(keys_content)

# 从键值数组中剔除已存在于 keys.ts 的键值
# keys = [key for key in keys if key not in existing_keys]
if expect:
    keys = [key for key in keys if key not in existing_keys]
else:
    keys = [key for key in keys]

# 创建一个新的 Excel 工作簿并设置表头
workbook = openpyxl.Workbook()
worksheet = workbook.active
worksheet.append(["tid_origin", "zh_cn", "ja", "en"])

# 从各个 TypeScript 文件中提取对应的值
for key in keys:
    zh_match = re.search(r"{}\s*:\s*`([\s\S]*?)`,".format(key), zh_content)
    ja_match = re.search(r"{}\s*:\s*`([\s\S]*?)`,".format(key), ja_content)
    en_match = re.search(r"{}\s*:\s*`([\s\S]*?)`,".format(key), en_content)

    zh_value = zh_match.group(1) if zh_match else "待定"
    ja_value = ja_match.group(1) if ja_match else "待定"
    en_value = en_match.group(1) if en_match else "待定"

    worksheet.append([key, zh_value, ja_value, en_value])

# 保存 Excel 文件
workbook.save("./output/上传到翻译平台.xlsx")

# 将键数组写入新的 TypeScript 文件
with open("已经翻译过的keys.ts", "w", encoding="utf-8") as keys_file:
    formatted_keys = "', '".join((existing_keys + keys) if expect else keys)
    keys_file.write("export const keys = ['{}'];\n".format(formatted_keys))

print('done')

# 处理标志


# def process_line(line, index):
#     match = re.search(r"(\s*)(\w+)(\s*:[^']+?')(.+)',", line)
#     if match:
#         indent, key, colon_and_quote, value = match.groups()
#         new_value = f"😁{index + 1} {value}"
#         return f"{indent}{key}{colon_and_quote}{new_value}',\n"
#     return line


# def process_file(input_file, output_file):
#     with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
#         index = 1
#         for line in infile:
#             processed_line = process_line(line, index)
#             if line != processed_line:
#                 index += 1
#             outfile.write(processed_line)


# output_file = "./output/zh_CN2.ts"
# process_file(zh_file, output_file)
