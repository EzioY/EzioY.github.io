---
title: MySQL数据库多表查询
date: 2019-09-03 11:17:32
tags: MySQL
categories: MySQL
---

---



# MySQL数据库多表查询

### **内连接（一种场景）**
inner join 或者 join

例：
```sql
    SELECT a.*,b.* FROM a
    INNER JOIN b
    ON a.id=b.id
```

应用场景：

<img src="https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145249.png" width="330" height="200" alt="inner-join" />

满足某一条件的A,B内部的数据，得到内部共有数据，相当于求交集。

---

### **外连接（六种场景）**
场景一：

left join 或者left outer join

例：
```sql
    SELECT a.*,b.* FROM a
    LEFT JOIN b
    ON a.id=b.id
```

应用场景：

<img src="https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145233.png" width="330" height="200" alt="left-join" />

得到的是A的所有数据和满足某一条件的B的数据。

---

场景二：

[left join] + [where b.column is null]

```sql
    SELECT a.id aid,a.age,b.id bid,b.name FROM tablea a
    LEFT JOIN tableb b
    ON a.id = b.id
    WHERE b.id is NULL
```

应用场景：

<img src="https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145303.png" width="330" height="200" alt="left-join+where-b.column-is-null" />

该场景得到的是A中的所有数据减去“与B满足统一条件的数据”，然后得到A剩下的数据。

---

场景三：

right join 或者right outher join

```sql
    SELECT a.id aid,a.age,b.id bid,b.name FROM a
    RIGHT JOIN b
    ON a.id = b.id
```

应用场景：

<img src="https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145314.png" width="330" height="200" alt="right-join"/>

该场景下得到B的所有数据和满足某一条件的A的数据。

---

场景四：

[right join] + [where A.column is null]

```sql
    SELECT a.id aid,a.age,b.id bid,b.name FROM a
    RIGHT JOIN b
    ON a.id=b.id
    WHERE a.id is NULL
```

应用场景：

<img src="https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145320.png" width="330" height="200" alt="right-join+where"/>

该场景下得到的是B中的所有数据减去“与A满足统一条件的数据”，然后得到B的剩余数据。

---

场景五：

full join（mysql不支持，但可以用left join union right join代替）

```sql
    SELECT a.id aid,a.age,b.id bid,b.name FROM a
    LEFT JOIN b
    ON a.id = b.id
    UNION
    SELECT a.id aid,a.age,b.id bid,b.name FROM a
    RIGHT JOIN b
    ON a.id = b.id
```
union会将重复的记录合并

应用场景：

<img src="https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145324.png" width="330" height="200" alt="full-join"/>

该场景得到的是满足某一条件的公有数据和独有数据，类似并集。

---

场景六：

full join + is null（mysql不支持，但可以用（left join+is null）union（right join+is null）

```sql
    SELECT a.id aid,a.age,b.id bid,b.name FROM a
    LEFT JOIN b
    ON a.id = b.id
    WHERE b.id is NULL
    UNION
    SELECT a.id aid,a.age,b.id bid,b.name FROM a
    RIGHT JOIN b
    ON a.id = b.id
    WHERE a.id is NULL
```

应用场景：

<img src="https://ezio-blogimages.oss-cn-beijing.aliyuncs.com/blog/oss_images/20201228145327.png" width="330" height="200" alt="full-join+is-null"/>

该场景下得到的是A，B中不满足某一条件的记录之和。

---
该文章借鉴参考于[https://www.cnblogs.com/yuzhanhong/p/9286910.html](https://www.cnblogs.com/yuzhanhong/p/9286910.html)

