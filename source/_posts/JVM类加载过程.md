---
title: JVM类加载过程
date: 2019-12-30 14:53:46
tags: JVM, Java
categories: JVM, JAVA
---

# JVM类加载过程

**在Java代码中，类型的加载、连接与初始化过程都是在程序运行期间(Runtime)完成的。**



***

**类的加载：**查找并记载类的二进制数据

**类的连接：**验证——确保被加载的类的正确性

​					准备——为类的<font color=red>静态变量</font>分配内存，并将其初始化为<font color=red>默认值</font>

​					解析——把类中的符号引用转换为直接引用

**类的初始化：**<font color=red>为类的静态变量赋予正确的初始化</font>

***

## Java程序对类的使用方式分为两种：

**1.主动使用**

**2.被动使用**

**所有的Java虚拟机实现必须在每个类或者接口被Java程序“<font color=red>首次主动使用</font>”才能初始化他们。**

***



## 主动使用(七种)：

**1.创建类的实例**

**2.访问某个类或者接口的静态变量，或对该静态变量赋值。(静态变量的取值或者赋值)getstatic、putstatic(助记符)**

**3.调用类的静态方法。invokestatic**

**4.反射(如Class.forName("com.ylw.Test"))。**

**5.初始化一个类的子类**

**6.Java虚拟机启动时被标名为启动类的类(包含main方法)。**

**7.JDK1.7开始提供的动态语言支持：java.lang.invok.MethodHandle实例的解析结果REF_getStatic,REF_putStatic,REF_invokeStatic句柄对应的类没有初始化则初始化。**



**除了以上七种情况，其他使用java类的方式都被看做是对类的被动使用，都不会导致类的初始化。**

***

