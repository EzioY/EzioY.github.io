---
title: MySQL数据库索引原理及类型
date: 2019-09-05 08:29:20
tags: MySQL
categories: MySQL
---

# MySQL数据库索引原理及类型

## 原理
索引的建立是为了加快查询的效率。索引本质上是一种数据结构，一般有哈希索引和B+Tree索引。主流的RDBMS都把B+Tree也就是平衡树当作数据表的默认索引数据结构。

### 聚簇索引（主键索引）
我们平时建表的时候都会为表加上主键，在某些关系数据库中，如果建表时不指定主键，数据库会拒绝建表的语句执行。 事实上，一个加了主键的表，并不能被称之为「表」。一个没加主键的表，它的数据无序的放置在磁盘存储器上，一行一行的排列的很整齐，跟我认知中的「表」很接近。如果给表上了主键，那么表在磁盘上的存储结构就由整齐排列的结构转变成了树状结构，也就是上面说的「平衡树」结构，换句话说，就是整个表就变成了一个索引，也就是所谓的「聚集索引」。这就是为什么一个表只能有一个主键，一个表只能有一个「聚集索引」，因为主键的作用就是把「表」的数据格式转换成「索引（平衡树）」的格式放置。
### 非聚簇索引
非聚集索引和聚集索引一样， 同样是采用平衡树作为索引的数据结构。索引树结构中各节点的值来自于表中的索引字段，假如给user表的name字段加上索引，那么索引就是由name字段中的值构成，在数据改变时， DBMS需要一直维护索引结构的正确性。如果给表中多个字段加上索引，那么就会出现多个独立的索引结构，每个索引（非聚集索引）互相之间不存在关联。每次给字段建一个新索引， 字段中的数据就会被复制一份出来，用于生成索引。因此，给表添加索引，会增加表的体积，用磁盘存储空间。

非聚集索引和聚集索引的区别在于，通过聚集索引可以查到需要查找的数据，而通过非聚集索引可以查到记录对应的主键值，再使用主键的值通过聚集索引查找到需要的数据。不管以任何方式查询表，最终都会利用主键通过聚集索引来定位到数据，聚集索引（主键）是通往真实数据所在的唯一路径。然而，有一种例外可以不使用聚集索引就能查询出所需要的数据，这种非主流的方法 称之为「覆盖索引」查询，也就是平时所说的复合索引或者多字段索引查询。 



## 普通索引
1.创建普通索引

```sql
CREATE INDEX indexName ON table(username(length));
```

2.修改表结构

```sql
ALTER table ADD INDEX [indexName] ON table(username(length));
```

3.创建表时直接指定

```sql
CREATE TABLE table(
ID INT NOT NULL,
username VARCHAR(16) NOT NULL,
INDEX [indexName] (username(length))
);
```
4.删除索引
```sql
DROP INDEX [indexName] ON table;
```

---

## 唯一索引
索引列的值必须唯一，但允许有空值；如果是组合索引，则索引值必须唯一。

1.创建唯一索引

```sql
CREATE UNIQUE INDEX indexName ON table(username(length));
```

2.修改表结构

```sql
ALTER table ADD UNIQUE [indexName] ON table(username(length));
```

3.创建表时直接指定

```sql
CREATE TABLE table(
ID INT NOT NULL,
username VARCHAR(16) NOT NULL,
UNIQUE [indexName] (username(length))
);
```

---

## 主键索引
一种特殊的唯一索引，不允许有空值；一般在创建表的时候同时创建。PS：一个表只能有一个主键

```sql
CREATE TABLE table(
ID INT NOT NULL,
username VARCHAR(16) NOT NULL,
PRIMARY KEY(ID)
);
```

---

## 组合索引
在之前username字段的基础上再加上age、city字段，然后创建组合索引

```sql
ALTER TABLE table ADD INDEX username_age_city(username(10),age,city);
```
因为MySQL的“最左匹配原则”，从最左边的开始组合，并不是只要包含这三列的查询都会用到该组合索引。
```sql
上面的组合索引相当于以下三个索引：
username,age,city
username,age
username
```

---

原文链接：[https://blog.csdn.net/weixin_42181824/article/details/82261988](https://blog.csdn.net/weixin_42181824/article/details/82261988)



