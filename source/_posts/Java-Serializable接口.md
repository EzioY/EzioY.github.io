---
title: Java Serializable接口
date: 2020-07-24 12:52:20
tags: Java
categories: Java
---

---



# Java 实体类为什么需要实现Serializable接口

本文转载自[原文链接](https://blog.csdn.net/qq_18298439/article/details/80607057)

​	在web项目中，javabean实体类一般用来封装数据。当客户端访问某个能开启会话功能的资源，web服务器会创建一个与该客户端匹配对应的HttpSession对象，且每个HttpSession对象都需要占用一定的内存空间。如果在某一时间段内站点的访问量增多，web服务器就会积累大量的HttpSession对象，消耗大量的服务器内存，即使用户离开了网页或者关闭了浏览器，web服务器仍要保留与之对应的HttpSession对象，在他们超时之前一直占用服务器资源。



### Session 持久化

​	 web服务器通常将那些暂时不活动但未超时的HttpSession对象转移到文件系统或数据库中保存，服务器要使用他们时再将他们从文件系统或数据库中装载入内存，这种技术称为Session的持久化。将HttpSession对象保存到文件系统或数据库中，需要采用序列化的方式将HttpSession对象中的每个属性对象保存到文件系统或数据库中；将HttpSession对象从文件系统或数据库中装载入内存时，需要采用反序列化的方式，恢复HttpSession对象中的每个属性对象。所以存储在HttpSession对象中的每个属性对象必须实现Serializable接口。



### serialVersionUID 的作用

​	**serialVersionUID** 用来表明类的不同版本间的兼容性

​	Java的序列化机制是通过在运行时判断类的serialVersionUID来验证版本一致性的。在进行反序列化时，JVM会把传来的字节流中的serialVersionUID与本地相应实体（类）的serialVersionUID进行比较，如果相同就认为是一致的，可以进行反序列化，否则就会出现序列化版本不一致的异常。

   当实现java.io.Serializable接口的实体（类）没有显式地定义一个名为serialVersionUID，类型为long的变量时，Java序列化机制会根据编译的class自动生成一个serialVersionUID作序列化版本比较用，这种情况下，只有同一次编译生成的class才会生成相同的serialVersionUID 。

​    如果我们不希望通过编译来强制划分软件版本，即实现序列化接口的实体能够兼容先前版本，未作更改的类，就需要显式地定义一个名为serialVersionUID，类型为long的变量，不修改这个变量值的序列化实体都可以相互进行串行化和反串行化。

   引起这个疑问，还是从Hibernate使用查询缓存说起；对象实例除了存在于内存，二级缓存还会将对象写进硬盘在需要的时候再读取出来使用，此时就必须提到一个概念：**序列化**。

   程序在运行时实例化出对象，这些对象存在于内存中，随着程序运行停止而消失，但如果我们想把某些对象（一般都是各不相同的属性）保存下来或者传输给其他进程，在程序终止运行后这些对象仍然存在，可以在程序再次运行时读取这些对象的信息，或者在其他程序中利用这些保存下来的对象信息恢复成实例对象。这种情况下就要用到对象的序列化和反序列化。

​	其实很早就知道的，在Java中常见的几个类，如：Interger/String等，都实现了java.io.Serializable接口。这个序列化接口没有任何方法和域，仅用于标识序列化语意；实现 Serializable 接口的类是可序列化的，没有实现此接口的类将不能被序列化和反序列化。序列化类的所有子类本身都是可序列化的，不再需要显式实现 Serializable 接口。只有经过序列化，才能兼容对象在磁盘文本以及在网络中的传输，以及恢复对象的时候反序列化等操作。



### 为何要实现序列化？

​	序列化就是对实例对象的状态(State 对象属性而不包括对象方法)进行通用编码（如格式化的字节码）并保存，以保证对象的完整性和可传递性。简而言之：序列化，就是为了在不同时间或不同平台的JVM之间共享实例对象。

​	如没有 实现Serializable接口，在序列化时，使用ObjectOutputStream的write（object）方法将对象保存时将会出现异常。其实 java.io.Serializable 只是一个没有属性和方法的空接口。