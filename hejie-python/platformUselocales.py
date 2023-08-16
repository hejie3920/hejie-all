# 创作平台梳理全部翻译
import os
import json
import regex as re
import mmap
import pandas as pd
import json


def load_json(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
    return data

def write_json(data, file_path):
    with open(file_path, 'w') as f:
        json.dump(data, f, ensure_ascii=False)

def escape_key(key):
    # Escape special characters in the key
    escaped_key = re.escape(key)
    # Match key surrounded by single or double quotes
    pattern = f"['\"]{escaped_key}['\"]"
    return re.compile(pattern)

def find_files(directories, extensions):
    for directory in directories:
        for root, dirs, files in os.walk(directory):
            for file in files:
                if file.endswith(extensions):
                # if file.endswith(extensions) and ('dist' not in root):
                    yield os.path.join(root, file)
                else:
                    continue
def main():
    localizations = load_json('./localizations/zh_CN.json')
    patterns = {key: escape_key(key) for key in localizations}
    directories_to_process = ['dm', 'javascript','embeddings','scripts','modules','repositories','textual_inversion_templates','models','html','extensions-builtin','extensions']  # Replace with your directories

    used_keys = set()
    for file_path in find_files(directories_to_process, ('.js', '.py')):
        print(file_path)
        if os.path.getsize(file_path) > 0:  # skip empty files
            with open(file_path, 'r') as f:
                mmapped_file = mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_READ)
                content = mmapped_file.read().decode()  # decode to string
            for key in list(patterns):  # copy keys for iteration
                pattern = patterns[key]
                if pattern.search(content):
                    used_keys.add(key)
                    del patterns[key]  # remove pattern after match

    res = {key: localizations[key] for key in localizations if key in used_keys}
    write_json(res, 'res.json')
    print('完成提取，生成res.json')

    # Load json files
    with open("./localizations/zh_CN.json", "r") as f:
        zh_cn_data = json.load(f)

    with open("./localizations/ja_JP.json", "r") as f:
        ja_jp_data = json.load(f)

    with open("res.json", "r") as f:
        en_data = json.load(f)

    # Prepare data for DataFrame
    data = {
        "tid_origin": list(en_data.keys()),
        "zh_cn": [zh_cn_data.get(key, "") for key in en_data.keys()],
        "ja": [ja_jp_data.get(key, "") for key in en_data.keys()],
        "en": list(en_data.keys()),
    }

    # Create DataFrame
    df = pd.DataFrame(data)
    # Save to Excel
    df.to_excel("创作平台所有的翻译.xlsx", index=False)
    print('输出翻译excel完成')

if __name__ == "__main__":
    main()