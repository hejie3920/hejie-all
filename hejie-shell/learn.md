# shell

- 变量：

设置：your_name="runoob.com",=左右不能有空格
unset your_name 删除
数组：array_name=(value0 value1 value2 value3)

使用：$your_name 或者在模板语句中用${your_name}
只读：readonly your_name

- 字符串
单引号：原样输出
双引号：可以有变量

your_name="runoob"
# 使用双引号拼接
greeting="hello, $your_name!"
greeting_1="hello, ${your_name} !"
echo $greeting  $greeting_1

# 使用单引号拼接
greeting_2='hello, '$your_name' !'
greeting_3='hello, ${your_name} !'
echo $greeting_2  $greeting_3

- 获取长度 
string="abcd"
echo ${#string}   # 输出 4

- 提取字符
string="runoob is a great site"
echo ${string:1:4} # 输出 unoo

- 查找子字符串
查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：
string="runoob is a great site"
echo `expr index "$string" io`  # 输出 4

- 数组
使用 @ 符号可以获取数组中的所有元素，例如：
实例
# 取得数组元素的个数
length=${#array_name[@]}
# 或者
length=${#array_name[*]}
# 取得数组单个元素的长度
lengthn=${#array_name[n]}


- 多行注释
:<<!
注释内容...
注释内容...
注释内容...
!

- 传参
./test.sh 1 2 3
echo $0 $1 $2

- 循环
#!/bin/bash
# author:hejie
# url:www.runoob.com
$* 与 $@ 区别：

相同点：都是引用所有参数。
不同点：只有在双引号中体现出来。假设在脚本运行时写了三个参数 1、2、3，，则 " * " 等价于 "1 2 3"（传递了一个参数），而 "@" 等价于 "1" "2" "3"（传递了三个参数）。

echo "-- \$* 演示 ---"
for i in "$*"; do
    echo $i
done

echo "-- \$@ 演示 ---"
for i in "$@"; do
    echo $i
done


- 特殊字符
参数处理	说明
$#	传递到脚本的参数个数
$*	以一个单字符串显示所有向脚本传递的参数。
如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。
$$	脚本运行的当前进程ID号
$!	后台运行的最后一个进程的ID号
$@	与$*相同，但是使用时加引号，并在引号中返回每个参数。
如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。
$-	显示Shell使用的当前选项，与set命令功能相同。
$?	显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。
