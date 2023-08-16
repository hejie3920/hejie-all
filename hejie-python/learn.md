- input()输入
- len 长度
- 类型，str,float,int()
- 整数等于浮点数
- and,or,not, not 2 + 2 == 5,先not 在and 再or
- range(0,10,2) 递增2，直到>=10终止，不包含10，比如range(5,-1,-1)
- 
##  内置模块,常用模块
random，random.randint(1,10), random.choice('abcdefg')
sys sys.exit()
time time.sleep()
copy copy.copy([a,b])可以拷贝一个列表，而不是拷贝引用，如果是复杂的列表，比如二维列表，就需要deepcopy()
- 生成随机数
```python
# 生成随机字符串的函数
def generate_random_string(length):
    letters_and_digits = string.ascii_letters + string.digits
    return ''.join(random.choice(letters_and_digits) for _ in range(length))
```

- from random import * 可以让你random.randint(0,10)不用写random. 但是这样不利于阅读，建议用普通的import
- None, null, nil, undefined
- print('cats', 'dogs', 'mice', sep=','), 指定分隔符
- print('Hello', end='')将结尾的符号换成空格，默认结尾都是换行
- 如果需要函数内修改全局变量，需要global var声明是全局的
- 异常处理
```python
try: 
    ...
except ZeroDivisionError:
    print('adf')
except: 
    print('asfd')
```
- pprint pprint.pformat, pprint.pprint()
- pyperclip pyperclip.copy('Hello world!'), .paste()
- sudo apt install xsel xclip
- sys sys.argv[1] 代表命令后第一个参数

## 列表，元祖
- arr[-1]倒数第一项
- arr[:2]省略代表是0
- [1,2] + [3,4]
- del arr[2]会直接剔除
- a in，a not in
- a,b,c = [1,3,4] 变量长度相等可以一次性多重赋值
- 列表，有.index方法获取索引，.append('a'), .insert(1,'a')任意位置插入,1是新值的下标，.remove('a'),同理多次出现的只会操作第一次出现的值，如果要根据下表删，用del好用，.sort(reverse=True),.sort(key=str.lower)普通字典排序
- for i in arr
- 改变字符串的正确方式newName = name[0:7] + 'the' + name[8:12]，name[7] = 'the'这样是不行的
- 元祖是(a,b)这种写法，跟列表一样，但是元祖是只读的
- type()判断类型，（a,）只有一个元素时，有逗号表示是元祖，不然就只会判断成普通（）里面的字符串
- 类型转换 str(),list(),tuple()
- python变量同样也有值引用和对象引用的问题

## 字典
- 不同键值的字典一样相等
- .values(),返回类似列表，但不能修改没有append，可以for in
- .keys(), .items返回元祖(key, value)
- 可以用list转换得到的列表为真实列表
- .get(key, 0) 可以直接访问字典某个key的值并处理异常情况，异常时返回0
- .setdefault('color', 'black') 如果没有值就设置默认值，常用在for in 时一开始设置默认值
  
## 字符
- '''三引号相当于`,也用于多行注释
- .upper(),.lower(),.isupper(),islower(),startswith,endswith()
- .join('asdf'),.join(['cats', 'rats', 'bats'])
- >>> 'MyABCnameABCisABCSimon'.split('ABC')
['My', 'name', 'is', 'Simon']
>>> 'My name is Simon'.split('m')
['My na', 'e is Si', 'on']
- spam.split('\n') 分割换行
- partion('e') 'hellow' => h e llow
- rjust(10)，右对齐，.ljust, .center, .strip() 相当于trim(), .rstip,.lstrip,
- spam = 'SpamSpamBaconSpamEggsSpamSpam'   spam.strip('ampS') ==> 'BaconSpamEggs'
- ord,转为阿斯克码数字，chr，转回来

## 正则表达式
- phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
 >>> phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
>>> mo = phoneNumRegex.search('My number is 415-555-4242.')
>>> print('Phone number found: ' + mo.group())
- .group(1)
- 正则 >>> batRegex = re.compile(r'Bat(man|mobile|copter|bat)')
>>> mo = batRegex.search('Batmobile lost a wheel')
>>> mo.group()
'Batmobile'
>>> mo.group(1)
'mobile'
- r'Bat(wo)?man'
- r'(Ha){3,5}?' 默认是贪心的，非贪心需要加?
- findall返回列表，如果有括号分组，则返回元祖列表
>>> phoneNumRegex = re.compile(r'(\d\d\d)-(\d\d\d)-(\d\d\d\d)') # has groups
>>> phoneNumRegex.findall('Cell: 415-555-9999 Work: 212-555-0000')
[('415', '555', '9999'), ('212', '555', '0000')]
- newlineRegex = re.compile('.*', re.DOTALL)，re.DOTAIL表示.也可以匹配包含换行符
- re.I 相当于ignore，不区分大小写，
- sub，相当于replace，参数1是最终要替换的词，第二个参数是原文
>>> namesRegex = re.compile(r'Agent \w+')
>>> namesRegex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
'CENSORED gave the secret documents to CENSORED.'
可以输入\1,\2,\3代表只替换哪个出现的返祖
- 
>>> agentNamesRegex = re.compile(r'Agent (\w)\w*')
>>> agentNamesRegex.sub(r'\1****', 'Agent Alice told Agent Carol that Agent
Eve knew Agent Bob was a double agent.')
A**** told C**** that E**** knew B**** was a double agent.'
