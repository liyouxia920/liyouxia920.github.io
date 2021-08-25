# csl-recording-2021

## 更新记录

## 0.0.2 （2021-08-25）

* 应用uni-app原生SDK插件，解决了安卓部分机型无法自定义设置定时相机的问题

## 0.0.1 （2021-08-24）

* 已使用uniapp框架重构
* 初始化

*****

## 介绍

聋人手语采集和教学APP。

前端目前使用Uniapp框架，最后通过HBuilderX打包。

UI使用uni ui和uView。

## 技术指导

袁老师、孙老师

## 开发人员

前端：朱宇、贺新龙、李酉夏

后端：陈程、贺新龙

## 开发周期

2021.7.18-2021.8.28


## 导入项目

直接使用HBuilderX导入项目即可。HBuilderX需要安装必要的插件。关于插件的参考如图。`less编译、scss/sass编译`插件必须安装。

[![hiYL11.jpg](https://z3.ax1x.com/2021/08/24/hiYL11.jpg)](https://imgtu.com/i/hiYL11)
[![hiYqpR.jpg](https://z3.ax1x.com/2021/08/24/hiYqpR.jpg)](https://imgtu.com/i/hiYqpR)

## 真机调试（开发者必看）
**为了避免一个奇怪的bug出现，强烈建议把项目导入到HBuilderX以后，删除.git文件夹后再进行真机调试。**

**0.0.2版**

目前**必须**通过安装自定义调试基座的方式进行调试。

1. 更新的版本摄像功能只兼容安卓系统。运行测试需要先打自定义基座，在HBuilderX中找到"运行-运行到手机或模拟器-制作自定义调式基座"，点击在弹层中按要求填写打包内容，打包即可，具体操作说明请参见：https://ask.dcloud.net.cn/article/35115
2. 在HBuilderX中找到“运行-运行到手机或模拟器-运行基座选择-自定义调试基座”，选择后运行项目即可。 

**0.0.1版**
在HBuildeX的菜单栏中选择“运行-运行到手机或模拟器”即可。Windows系统如果想对iOS端的兼容性进行调试，为了确保“运行-运行到手机或模拟器”中能检测到iPhone或iPad机型，可能需要下载iTools。
备注：iTools下载地址 http://www.itools.cn/

## 学习文档（快速入门）

框架和IDE：

1. [入门教程 - HBuilderX 文档 (dcloud.net.cn)](https://hx.dcloud.net.cn/Tutorial/StartedTutorial)

2. 如何学习uni-app https://uniapp.dcloud.io/resource

3. uni-app接口规范 https://uniapp.dcloud.io/api/README

4. 利用文档学习Vue https://uniapp.dcloud.io/vue-basics

5. 安装配置手机模拟器 [如何安装配置手机模拟器 - DCloud问答](https://ask.dcloud.net.cn/article/151)

   可同时使用HBuildeX和vs code开发。当然，真机调试功能必须依赖HBuildeX。

UI:

1. 组件概述 https://uniapp.dcloud.io/component/README

2. 关于uni-app的库、ui框架、ui组件 https://ask.dcloud.net.cn/article/35489

3. uni-app的基础组件 https://uniapp.dcloud.io/component/README?id=%e5%9f%ba%e7%a1%80%e7%bb%84%e4%bb%b6

4. uniapp的扩展组件（uni-ui）https://uniapp.dcloud.io/component/README?id=uniui

   （我们的项目已内置）

5. uView https://www.uviewui.com/

   （我们的项目已内置）
