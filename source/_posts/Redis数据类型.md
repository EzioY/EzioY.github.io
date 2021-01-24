---
title: Redis数据类型
date: 2019-12-30 14:44:39
tags: Redis
categories: Redis
---

---



# Redis数据类型

Redis支持五种数据类型，分别是string（字符串）、list（列表）、hash（哈希）、set（集合）、zset（sorted set：有序集合）

## Redis数据结构
* **string：** key-value
* **hash：** key-field-value
* **list：**key-value
* **set：**key-member
* **zset：**key-score-member

> * http://redisdoc.com/ Redis命令查询

## Redis场景应用思路

**1.针对具体场景选用适合的数据结构**

* 涉及随机，不重复：**set**

* 多维度排序：**zset**

* 单维度排序：**list、zset**

**2.限制条件的判断**

* 可以通过增加标识key去判断，方式有：

  **setnx、hsetnx、incrby、hincrby、zincrby**

* 也可以通过set的唯一性去判断：

  **sadd、zadd**

**3.zset数据结构的权重值score设计在某些场景可以通过设置一个基准值进行比较**

例如：送礼成功后，房间送礼榜单实时计算用户送礼总金额及房间送礼排名，并且不在房间的用户无排名，如何设计？

该问题存在以下四个场景：

* 用户进入房间

* 查询房间榜单

* 用户赠送礼物

* 用户离开房间

其中，在用户进入房间和离开房间时，通过给每个进入的用户设置较大基准值

```java
/**
 * 用户基本权重
 */
long baseScore = 1000000000L;
```

来实现用户离开和进入对排名的影响，查询房间列表只取基准值以上的，离开房间则减去基准值。