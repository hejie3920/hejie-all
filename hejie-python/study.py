from random import *
import re
a=len(range(10))
a=int(100)*7
a =  2 + 2 != 5
a = randint(0,10)

# def spam():
#     print(eggs)
# eggs = 42
# spam()


spam={'a':12,'b':34,'c':56,'d':78}
a = tuple(spam.items())
  
b = [1,2,3,4,5,6,7]
a = [k for k in b if k % 2 == 0]
a = tuple(a)
print(a)

  
theBoard = {'top-L': 'O', 'top-M': 'O', 'top-R': 'O', 'mid-L': 'X', 'mid-M':
'X', 'mid-R': ' ', 'low-L': ' ', 'low-M': ' ', 'low-R': 'X'}

phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
mo = phoneNumRegex.search('My number is 415-555-4242.')
print('Phone number found: ' + mo.group())

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

# import pyperclip
# text = pyperclip.paste()

# # Separate lines and add stars.
# lines = text.split('\n')
# for i in range(len(lines)):    # loop through all indexes for "lines" list
#     lines[i] = '* ' + lines[i] # add star to each string in "lines" list
# text = '\n'.join(lines)
# pyperclip.copy(text)