const express = require("express");
const app = express();
const Date = [
    {
        enterpriseName:"曲速",//公司名称
        getEamil: "11112222",//Eamil
        password:"1",//密码
        phone:15913335501//电话
    },
    {
        enterpriseName:"未来",//公司名称
        getEamil: "qaz111",//Eamil
        password:"2",//密码
        phone:15913335510//电话
    }
];
// 注册
app.get('/',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    // var {phone} = req.url;
    var index = req.url.indexOf('?');
    var arr = req.url.substring(index+1).split('&');
    var obj = {};
    for(var i=0;i<arr.length;i++){
        // arr[i].split("=")
        obj[arr[i].split("=")[0]]=arr[i].split("=")[1]
    }
    console.log({phone:obj.phone,pass:obj.pass})
    res.json({phone:obj.phone,pass:obj.pass})
});
// 登录
app.get('/Loginbackstage',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    // var {phone} = req.url;
    var index = req.url.indexOf('?');
    var arr = req.url.substring(index+1).split('&');
    var obj = {};
    for(var i=0;i<arr.length;i++){
        // arr[i].split("=")
        obj[arr[i].split("=")[0]]=arr[i].split("=")[1]
    }
    console.log(obj)
    res.json(obj)
});

app.listen(9999)
