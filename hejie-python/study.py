import sys
from urllib.parse import quote
import webbrowser
import logging
import pyperclip
import requests
from http import client as httpclient
import time
import json
from random import *
import re
import os
import pyinputplus as pyip
from pathlib import Path
import shelve
import pprint
import test
import shutil
import zipfile

a = 'start'

for filename in Path.cwd().glob('*.py'):
    # os.unlink(filename)
    print(filename)

# a = Path.cwd()
# a = os.path.abspath(os.path.join(os.getcwd(), '../../'))
# shutil.copytree('lib', 'lib2')
# shutil.move('test.txt', Path.cwd() / 'hejie/zone/aaa.txt')

# a=len(range(10))
# a=int(100)*7
# a =  2 + 2 != 5
# a = randint(0,10)

# # def spam():
# #     print(eggs)
# # eggs = 42
# # spam()


# spam={'a':12,'b':34,'c':56,'d':78}
# a = tuple(spam.items())

# b = [1,2,3,4,5,6,7]
# a = [k for k in b if k % 2 == 0]
# a = tuple(a)
# print(a)


# theBoard = {'top-L': 'O', 'top-M': 'O', 'top-R': 'O', 'mid-L': 'X', 'mid-M':
# 'X', 'mid-R': ' ', 'low-L': ' ', 'low-M': ' ', 'low-R': 'X'}

# phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
# mo = phoneNumRegex.search('My number is 415-555-4242.')
# print('Phone number found: ' + mo.group())

#! python3
# pw.py - An insecure password locker program.

# 剪贴板的案例
# import sys, pyperclip

# PASSWORDS = {'email': 'F7minlBDDuvMJuxESSKHFhTxFtjVB6',
#              'blog': 'VmALvQyKAxiVH5G8v01if1MLZF3sdt',
#              'luggage': '12345'}

# if len(sys.argv) < 2:
#     print('Usage: py pw.py [account] - copy account password')
#     sys.exit()

# account = sys.argv[1] # first command line arg is the account name

# if account in PASSWORDS:
#     pyperclip.copy(PASSWORDS[account])
#     print('Password for ' + account + ' copied to clipboard.')
# else:
#     print('There is no account named ' + account)

# ! python3
# bulletPointAdder.py - Adds Wikipedia bullet points to the start
# of each line of text on the clipboard.

# text = pyperclip.paste()

# # Separate lines and add stars.
# lines = text.split('\n')
# for i in range(len(lines)):    # loop through all indexes for "lines" list
#     lines[i] = '* ' + lines[i]  # add star to each string in "lines" list
# text = '\n'.join(lines)
# pyperclip.copy(text)
# res = pyip.inputInt('请输入:', min=4, lessThan=10)


# def addsUpToTen(numbers):
#     numbersList = list(numbers)
#     for i, digit in enumerate(numbersList):
#         numbersList[i] = int(digit)
#     if sum(numbersList) != 10:
#         raise Exception('The digits must add up to 10, not %s.' %
#                         (sum(numbersList)))
#     return int(numbers)  # Return an int form of numbers.


# # res = pyip.inputCustom(addsUpToTen, '请输入:', limit=2, default=0)
# res = ''
# while res != 'no':
#     res = pyip.inputYesNo('请输入yes Or no:', yesVal='yes', noVal='no')
#     print(res)

# a = os.path.abspath('./lib/创作平台所有的翻译v2.xlsx')

# print(os.path.getsize(a), a)
# print(Path.cwd())
# a = open('./test.txt', 'a')
# a.write('nihao')
# a.close()
# print(open('./test.txt').read())
# shelfFile = shelve.open('mydata')
# cats = [{'name': 'hejie'}, {'name': 'fenfen'}]
# pcats = pprint.pformat(cats)
# file = open('test.py', 'w')
# file.write('cats=' + pcats + '\n')
# file.close()
# print(test.cats)

# shelfFile['cats'] = cats
# # type(shelfFile)
# print(shelfFile['cats'])
# shelfFile.close()

# shutil.move('./hejie12/sdf', './hejie')
# for i in list(Path().glob('*')):
#     print(i)

a = Path.joinpath(Path.cwd(), 'hejie')

# a = zipfile.ZipFile('compressor.zip')
# print(a.namelist())
# a.extractall('hejie')

#!/usr/bin/env python
# -*- coding: UTF-8 -*-

print(a)

# market_2nd = {'ns': 'green', 'ew': 'red'}
# mission_16th = {'ns': 'red', 'ew': 'green'}
# print(market_2nd.keys())


# # def switchLights(stoplight):
# #     for key in stoplight.keys():
# #         if stoplight[key] == 'green':
# #             stoplight[key] = 'yellow'
# #         if stoplight[key] == 'yellow':
# #             stoplight[key] = 'red'
# #         if stoplight[key] == 'red':
# #             stoplight[key] = 'green'
# #     assert 'red' in stoplight.values(), 'Neither light is red! ' + str(stoplight)


# # switchLights(market_2nd)
# # print(market_2nd)


# FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
# logging.basicConfig(level=logging.DEBUG, format=FORMAT)

# logging.debug('Start of program')


# def factorial(n):
#     logging.debug('Start of factorial({})'.format(n))
#     total = 1
#     for i in range(n + 1):
#         total *= i
#         logging.debug('i is ' + str(i) + ', total is ' + str(total))
#     logging.debug('End of factorial({})'.format(n))
#     return total


# print(factorial(5))
# logging.debug('End of program')
# import logging

# 项目的完整代码如下
print(sys.argv)

if len(sys.argv) > 1:
    # Get address from command line.
    address = ' '.join(sys.argv[1:])
else:
    # Get address from clipboard.
    address = pyperclip.paste()

address = quote(address)

# webbrowser.open('https://ditu.amap.com/search?query=' + address)
