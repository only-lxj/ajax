function ajax(method,url,string,fnSucc,fnFail)
{
    //1.创建Ajax对象
    if(window.XMLHttpRequest)
    {
        var oAjax = new XMLHttpRequest();
    }
    else           //IE5,IE6
    {
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.连接服务器
    //open(方法，文件名，异步传输)
    oAjax.open(method,url,true);
    /*
    3.发送请求
    oAjax.setRequestHeader("Content-type","application/x-www-form-urlencoded");  //POST请求时需要写，设置HTTP头信息，一定要写在open()和send()之间
    oAjax.send("name=***&sex=男");
    */
    oAjax.send(string);
    //4.接受返回
    oAjax.onreadystatechange=function()
    {
        /*
         readyState：浏览器和服务器进行到哪一步
         0：请求未初始化（还没有调用 open()）
         1：请求已经建立，但是还没有发送（还没有调用 send()）
         2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）
         3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成
         4：响应已完成；您可以获取并使用服务器的响应了。
         */
        if(oAjax.readyState==4)
        {
            if(oAjax.status==200)       //判断读取是否成功
            {
                fnSucc(oAjax.responseText);
            }
            else
            {
                fnFail(oAjax.status);
            }

        }
    }
}
