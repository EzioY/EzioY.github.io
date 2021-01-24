---
title: hexo+GitHub pages搭建个人博客
date: 2020-08-11 15:05:29
tags: hexo,blog
categories: hexo
---

---



# 基于hexo+GitHub pages搭建个人博客

**准备工作：**

> * github账号
> * 安装 node.js、npm
> * 安装 git for windows

**本人环境：**

> * OS：Windows_NT 10.0.18363 win32 x64
> * hexo-cli：3.1.0
> * node：10.16.2
> * git：2.22.0.windows.1

## GitHub Pages 简介

GitHub Pages是一个**静态站点托管服务**，可直接从GitHub上的存储库获取HTML，CSS和JavaScript文件，还可以选择在构建过程中运行这些文件并发布网站。[About GitHub-pages](https://docs.github.com/en/github/working-with-github-pages/about-github-pages)



## 创建远程仓库

在github上新建一个远程仓库，取名为：**username.github.io** 的仓库。例如我的github用户名为EzioY，则远程仓库名为：EzioY.github.io。之后可以直接通过 http://EzioY.github.io 直接访问你的博客。



## 配置SSH key

### Git的两种连接方式：SSH 和 HTTP 介绍

**SSH方式：**

**相对安全**，且使用 SSH url 克隆却需要在克隆之前先配置和添加好 SSH key，因此，如果你想要使用 SSH url 克隆的话，你必须是这个项目的拥有者。否则你是无法添加 SSH key 的，另外 ssh 默认是每次 fetch 和 push 代码都不需要输入账号和密码，如果你想要每次都输入账号密码才能进行fetch和 push 也可以另外进行设置。

**HTTP方式：**

这种方式要求project在创建的时候只能选择“Public”公开状态，Private 和 Internal 私有模式下不能使用 http 方式进行连接。（ssh方式在三种模式下都可以）。使用 http 方式直接连接 github 显然没有 ssh 连接方式安全，但是也可以做些安全设置，比如在 github 本机的 iptables 里做端口限制(如上是8081端口),添加白名单等。

**主要区别：**

使用 https url 克隆对初学者来说会比较方便，复制 https url 然后到 git Bash 里使用 clone 命令直接克隆到本地就行，但是每次 fetch 和 push 代码都需要输入账号和密码，而SSH一次配置好后不用每次都输入密码。

---



### 获取SSH key

打开 git Bash，查看本机是否存在ssh密钥

```bash
$ cd ~/.ssh #如果提示：No such file or directory则说明第一次使用git
```

然后创建SSH key

```bash
$ ssh-keygen -t rsa -C "your email"
```

再次通过上面的命令查看是否存在ssh密钥，则会看到 **.ssh\id_rsa.pub** 文件

找到这个文件，并复制里面的内容。然后打开自己的github主页，点击用户头像，选择 **Settings** 设置选项

![settings](https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145403.png)

然后选择 **SSH and GPG keys**

![](https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145405.png)

然后就可以看到如下界面，然后选择 **New SSH key**：

![](https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145407.png)

将刚才复制的ssh-rsa内容，粘贴到Key中，Title可以自己随便取名，然后保存。

---



### 测试是否成功配置SSH key

```bash
$ ssh -T git@github.com
```

如果提示：Are you sure you want to continue connecting (yes/no)? 则输入yes，然后会看到：

> Hi EzioY! You've successfully authenticated, but GitHub does not provide shell access.

看到这个则说明配置成功。然后还需配置你的用户名和你github的注册邮箱

```bash
$ git config --global user.name "liuxianan" #你的github用户名，非昵称
$ git config --global user.email  "xxx@qq.com" #填写你的github注册邮箱
```



## Hexo 安装配置

### hexo简介

Hexo是一个简单、快速、强大的基于 Github Pages 的博客发布工具，支持Markdown格式，有众多优秀插件和主题。

### 原理

由于github pages存放的都是静态文件，博客存放的不只是文章内容，还有文章列表、分类、标签、翻页等动态内容，假如每次写完一篇文章都要手动更新博文目录和相关链接信息，相信谁都会疯掉，所以hexo所做的就是将这些md文件都放在本地，每次写完文章后调用写好的命令来批量完成相关页面的生成，然后再将有改动的页面提交到github。

### 安装初始化

```bash
$ npm install -g hexo-cli
```

安装好后在本地新建一个文件夹，用来存放 Blog 文件。然后进入该目录下执行hexo初始化命令

```bash
$ hexo init
```

![](https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145412.png)

初始化完后就可以看见这样的目录结构：

![](https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145409.png)

然后在该目录路径下用git bash执行下面的命令：

```bash
$ hexo g #生成静态文件
$ hexo s #本地预览 默认端口号4000 http://localhost:4000
```

页面如下：

![](https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145414.png)

### 跟换主题

选择一个喜欢的主题，复制它的SSH或http链接，克隆下来。

```bash
$ cd /e/blog
$ git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia
```

然后将**_config.yml** 配置文件中的 theme：landscape 改为自己下的主题，例如theme：Chic。

![](https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145411.png)

然后清除之前生成的静态文件，重新生成预览

```bash
$ hexo clean
$ hexo g
$ hexo s
```

### 上传到Github

首先修改配置文件 **_config.yml** 中的**deploy**

```yml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy: 
  type: git
  repo: https://github.com/你的用户名/用户名.github.io.git
  branch: master
```

然后打开 gitbash 安装一个插件，hexo发布到git需要。

```bash
$ npm install hexo-deployer-git --save
```

安装完后就可以将blog静态资源文件提交到git远程仓库上。

```bash
$ hexo d
```

### hexo常用命令

```bash
$ hexo new "postName" #新建文章
$ hexo new page "pageName" #新建页面
$ hexo generate #生成静态页面至public目录
$ hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
$ hexo deploy #部署到GitHub
$ hexo help  # 查看帮助
$ hexo version  #查看Hexo的版本
```

简写：

```bash
$ hexo n == $ hexo new
$ hexo g == $ hexo generate
$ hexo s == $ hexo server
$ hexo d == $ hexo deploy
```

每次跟新了文章只需执行以下步骤：

```bash
$ hexo clean
$ hexo g
$ hexo s
$ hexo d
```

