---
title: Linux环境下安装tomcat
date: 2019-12-05 15:03:20
tags: Linux
categories: Linux
---

# Linux环境下安装tomcat

1.下载tomcat压缩包上传到服务器

2.解压tomcat压缩包

```bash
$ tar zxvf 压缩包
```

3.解压后的文件复制到/usr/local/tomcat

```bash
$ cp -r apache-tomcat-8.5.43../tomcat
```

4.配置环境变量

```bash
$ vim /etc/profile
添加以下内容
export TOMCAT_HOME=/usr/local/tomcat
export CATALINA_HOME=/usr/local/tomcat
```

5.放行8080端口

```bash
$ vim /etc/sysconfig/iptables
```

把包含22端口的那一行复制并改成8080

6.重启服务

```bash
$ service iptables restart
```

7.启动tomcat，进入tomcat/bin文件夹

```bash
$ cd /usr/lcoal/tomcat/bin
直接启动：$ ./startup.sh
启动并动态打印信息：$ ./startup.sh & tailf /usr/local/tomcat/logs/catalina.out
```

