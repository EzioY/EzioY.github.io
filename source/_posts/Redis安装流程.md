---
title: Redis安装流程
date: 2019-12-03 16:59:43
tags: Redis
categories: Redis
---

# Redis安装流程

本安装流程于Linux环境下安装，所用redis版本为5.0.7。

---

### 具体流程：

1.看是否有gcc环境，没有则安装

```bash
$ yum install gcc-c++
```

2.下载压缩包到指定目录，可直接去官网下载[https://redis.io/download](https://redis.io/download)

```bash
$ wget http://download.redis.io/releases/redis-5.0.7.tar.gz
```

3.解压压缩包

```bash
$ tar xzf redis-5.0.7.tar.gz
```

4.进入解压后的文件夹

```bash
$ cd redis-5.0.7
```

5.执行make命令编译

```bash
$ make
```

6.再进入src目录，在其目录下执行命令 make install

```bash
$ make install
```

7.创建新的目录redis、bin、etc，用于分类执行文件和配置文件(这一步不是必做)

```bash
$ mkdir -p /usr/local/redis/bin（加-p参数如果上级目录不存在则自动创建）
$ mkdir -p /usr/local/redis/etc
```

8.将redis 5.0.7/src目录下的redis-server，redis-check-aof，redis-check-rdb，redis-cli，redis-benchmark，mkreleasehdr.sh，redis-sentainel移动到的自建的redis/bin目录下

```bash
$ mv redis-server redis-check-aof redis-check-rdb redis-cli redis-benchmark mkreleasehdr.sh redis-sentinel /usr/local/redis/bin
```

9.拷贝配置文件到自建etc目录下

```bash
$ cp redis.conf /usr/local/redis/etc
```

10.启动redis服务，通过指定配置文件启动服务

```bash
$ /usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf
```

出现以下画面则说明启动成功

<img src="https://raw.githubusercontent.com/EzioY/BlogImages/master/img/20191204092911.jpg" style="zoom:80%;" />

6379为redis端口号，按Ctrl+C可退出服务

11.进入自建的redis/etc目录下，修改redis.conf配置文件，让redis变为后台启动方式

```bash
$ cd /usr/local/redis/etc
$ vim redis.conf
```

将daemonize改为yes

<img src="https://raw.githubusercontent.com/EzioY/BlogImages/master/img/20191204093702.png" style="zoom:80%;" />

12.再次启动服务，出现一下画面则说明成功

<img src="https://raw.githubusercontent.com/EzioY/BlogImages/master/img/20191204094149.png" style="zoom:80%;" />

可通过ps -ef | grep 6379查看redis服务是否启动或这关闭

<img src="https://raw.githubusercontent.com/EzioY/BlogImages/master/img/20191204094428.png" style="zoom:80%;" />

13.进入客户端

```bash
$ redis-cli
```

![](https://raw.githubusercontent.com/EzioY/BlogImages/master/img/20191204095458.png)

按Ctrl+C可退出

14.关闭redis服务

```bash
$ pkill redis-server
或者
$ /usr/local/redis/bin/redis-server shutdown
```



