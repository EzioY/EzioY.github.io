---
title: AJAX异步请求
date: 2020-07-18 15:36:29
tags: AJAX
categories: AJAX
---

---



# AJAX

### 前端用js写原生AJAX

```js
function getXhr(){
    //获取AJAX核心对象XMLHttpRequest
    var xhr = new XMLHttpRequest
    //建立连接（指定一个发生请求的地址和方式），第三个参数默认true，表示异步，false同步。
    xhr.open("POST", "/AjaxTest");
    //绑定事件（onreadystatechange）
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var text = xhr.responseText;
            //在这处理后端成功响应返回的数据
            //JSON.parse() 把json字符串转为json对象
        }
    }
    //发送请求
    xhr.send();
}
```

### 后端处理AJAX请求：

```java
//设置响应数据类型和字符集编码
resp.setContentType("appclication/json")
//利用什么对象的输出流来输出json数据
resp.getWriter().write("{\"name\":\"张三丰\",\"age\":22}");
resp.getWriter().flush();
resp.getWriter().close();
```

---

### 利用jQuery发送AJAX请求：

```js
$.ajax({
    //请求方式，"GET"or"POST"，默认"GET"且忽略大小写
    type : ""
    //请求发送路径
    url : "";
    //请求内容类型
    //常用的三种content-type：application/x-www-form-urlencoded、application/json、multipart/form-data
    //application/json用来告诉服务端消息主体是序列化后的 JSON 字符串
    contentType : "application/json;charset=UTF-8"
    //需要传递给后端的数据
    data : "";
    //请求成功
    success : function(result){
    	console.log(result);
    	//请求成功后的具体处理
	})
    //请求失败，包含具体的错误信息
    error : function(e){
    	console.log(e.status);
        console.log(e.responseText);
    }
})
```

### jQuery针对与不同请求也提供了封装好的ajax请求：

```js
//其中第一个参数为请求发送路径，第二个为请求携带参数（可省略），第三个为回调函数，第四个为请求内容类型（text，json）
$.get("/url",param,function(result){
    //处理响应
},"json")

//该方法已指定了请求内容类型为json
$.getJSON("/url",param,function(result){
    //处理响应
})

$.post("/url",param,function(result){
    //处理响应
},"json")
```

后端响应异步请求，可以利用springmvc的@ResponseBody注解：

@ResponseBody是作用在方法上的，作用是将java对象转为json格式的数据，并把返回结果直接写入 HTTP response body 中。

```java
@ResponseBody
@RequestMapping("/user")
public List<User> findAll(){
	return userService.findAll();
}
```