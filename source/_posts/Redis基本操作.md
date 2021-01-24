---
title: Redis基本操作
date: 2020-07-10 10:40:47
tags: Redis
categories: Redis
---

---



# Redis keys 命令

|   命令   |   描述   |
| :----: | :---- |
| **DEL key** |   key存在时删除该key   |
| **DUMP Key** |   序列化该key，并返回被序列化的值   |
| **EXISTS key** |   检查给定的key是否存在   |
| **EXPIRE key seconds** |   给该key设置过期时间，单位秒    |
| **EXPIREAT key timestamp** | EXPIREAT 的作用和 EXPIRE 类似，都用于为 key 设置过期时间。 不同在于 EXPIREAT 命令接受的时间参数是 UNIX 时间戳(unix timestamp) |
| **PEXPIRE key milliseconds** | 设置 key 的过期时间以毫秒计 |
| **PEXPIREAT key milliseconds-timestamp** | 设置 key 过期时间的时间戳(unix timestamp) 以毫秒计 |
| **KEYS pattern** | 查找所有符合给定模式( pattern)的 key  |
| **MOVE key db** | 将当前数据库的 key 移动到给定的数据库 db 当中 |
| **PERSIST key** | 移除 key 的过期时间，key 将持久保持 |
| **PTTL key** | 以毫秒为单位返回 key 的剩余的过期时间 |
| **TTL key** | 以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live) |
| **RANDOMKEY** | 从当前数据库中随机返回一个 key |
| **RENAME key newkey** | 修改 key 的名称 |
| **RENAMENX key newkey** | 仅当 newkey 不存在时，将 key 改名为 newkey |
| **SCAN cursor [MATCH pattern] [COUNT count]** | 迭代数据库中的数据库键 |
| **TYPE key** | 返回 key 所储存的值的类型 |
