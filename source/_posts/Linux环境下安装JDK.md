---
title: Linux环境下安装JDK
date: 2019-12-04 16:01:30
tags: Linux
categories: Linux
---

# Linux环境下安装JDK

1.首先去官网或者通过其他途径获取压缩包

2.把压缩包上传到服务器/usr/local/tmp

3.解压压缩包

```bash
$ tar zxvf jdk
```

4.把解压后的文件复制到/usr/local/jdk8

```bash
$ cp -r 文件名 /usr/local/jdk8
```

5.配置环境变量，执行命令

```bash
$ vim /etc/profile
```

6.修改文件中的内容，内容如下

```bash
export JAVA_HOME=/usr/local/jdk8
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```

export 添加或修改变量

7.解析文件（或重启系统）

```bash
$ source /etc/profile
```

8.验证配置是否成功

```bash
$ java-version
```

