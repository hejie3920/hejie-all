-   [1. 概念](#1-概念)
    -   [1.1. 链的运行](#11-链的运行)
    -   [1.2. 智能合约](#12-智能合约)
    -   [1.3. 账户](#13-账户)
    -   [1.4. 代币](#14-代币)
    -   [1.5. 二层网络](#15-二层网络)
-   [2. Solidity](#2-solidity)
    -   [本质上就是一个部署在 evm 虚拟机上的程序](#本质上就是一个部署在-evm-虚拟机上的程序)
    -   [Pragma 指令](#pragma-指令)
    -   [modifier 函数修饰符(类似各种中间件)](#modifier-函数修饰符类似各种中间件)
    -   [事件](#事件)
    -   [条件和循环](#条件和循环)
    -   [值类型](#值类型)
    -   [枚举](#枚举)
    -   [引用](#引用)
    -   [\[\] 数组](#-数组)
    -   [struct 结构](#struct-结构)
    -   [mapping 映射类型](#mapping-映射类型)
    -   [变量](#变量)
        -   [local（提供链全局信息的变量）state global](#local提供链全局信息的变量state-global)
        -   [常量](#常量)
        -   [可见性与关键词](#可见性与关键词)
    -   [函数选择器](#函数选择器)
    -   [interface 合约，接口声明](#interface-合约接口声明)
    -   [接口继承和重写](#接口继承和重写)
    -   [contract 合约，即类](#contract-合约即类)
    -   [资产类型 gas spent, gas price, gas limit](#资产类型-gas-spent-gas-price-gas-limit)
    -   [学习项目](#学习项目)
    -   [简单示例 Solidity](#简单示例-solidity)
-   [3. 学习资料](#3-学习资料)
-   [智能合约 Solidity](#智能合约-solidity)

## 1. 概念

### 1.1. 链的运行

一个链的运行，大概有以下几个步骤：用户发起交易，暂存到内存池矿工根据链规则，获得打包机会矿工在内存池中检索并提取在区块大
小限制内，提供小费最多的交易，小费也决定了矿工的收益。矿工验证交易的合法性矿工将交易打包至区块内，广播到整个网络开启下一
轮循环

1. 每个公链都有与之对应的浏览器，区块链浏览器是一个网站，可以在上面查找所有链上的数据， etherscan.io mempool.space
   suiscan.xyz

### 1.2. 智能合约

智能合约是部署在区块链上的程序。可以被用户发起交易来调用。开发者可以自己编写，部署智能合约。通过智能合约，将数据保存在链
上，同时可以调用智能合约以读取数据。

从 WEB2 开发者的角度来看，如果 web3 公链是远程服务器，那么智能合约就是运行在服务器上的后端程序。

### 1.3. 账户

账户(Account) 是进行区块链活动的最基本单位之一。几乎所有的公链，都有账户模型的设计。区块链上的资产都由账户持有。区块链交
易也由账户发起。区块链中的账户可以被人类所拥有，也可以是没有人拥有的（例如智能合约）。

一个区块链账户，由一对公钥和私钥产生。大部分情况下使用公钥代表链上地址。

如果你持有该地址的私钥，那么就说明你掌握了这个地址的所有权，可以对这个地址进行任意操作。】

### 1.4. 代币

说到区块链技术，就必定会联想到虚拟货币。虚拟货币是区块链派生的应用之一，在区块链中，我们也可以管虚拟货币叫做代币。

链上代币主要有两种原生代币协议代币（ERC20 & ERC721） ![](markdown/20240919113830.png)

### 1.5. 二层网络

二层网络是对已有网络的扩容，旨在解决现有网络容量不足，速度较慢的问题

以太坊作为 L1，TPS 只有 20 左右，不足以支撑繁荣的区块链生态，这时候一些扩容方案应运而生。 L2 的链，在 L1 的基础上搭建，
需要经过 L1 共识以进行验证。 L2 相较于 L1，不仅 TPS 更高，而且 gasfee 更便宜，货币可以很方便地进行流通。

## 3. 学习资料

Openbuild 地址 ⬇️ 关于视频汇集： 🔗 学习平台：https://openbuild.xyz/learn/challenges/2036589711

🔗YouTube：https://youtu.be/Ai0eTfBvEzw

🔗B 站： https://www.bilibili.com/video/BV1ZPT9esE2c/

⬇️ 作业与技术答疑仓库： 🔗 作业提交：https://github.com/openbuildxyz/Web3-Frontend-Bootcamp

🔗 技术答疑：https://github.com/openbuildxyz/Web3-Frontend-Bootcamp/discussions/categories/q-a

多人协作，pr 与其它开发者的互动- 使用 Pull Request（PR） - 为你自己学 Git | 高见龙
https://gitbook.tw/chapters/github/pull-request

fork -〉 git remote add upstream 【主仓库的 ssh 地址】 -》 同步更新最新同理，直接 git pull upstream master，可以拉取主仓
库的 master 分之 =》 修改 push 后 -〉 直接在主仓库发个 pr， new pull request 按钮点击即可

使用安装 metaMask 插件 https://app.uniswap.org/ 可以在这里进行交易

## 智能合约 Solidity
