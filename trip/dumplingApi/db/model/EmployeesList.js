 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  EmployeesList=new Schema({
    //  用户名
     user: {type:String,required:true},
    //  姓名
     name: { type: String, default: Date.now},
    //  密码
     passwprd:{type:String,required:true},
    //  密码
     mail:{type:String,required:true},
    //角色
     role:{type:String,required:true},
    //登录时间
     time:{type:String,default:Data.now}
 })
/*
uid:'',
list:[
    {
        goodsId:'',
        num:'',
    }
]

*/ 

// 员工相关的数据库
 let shopCarModel=mongoose.model('EmployeesList',EmployeesList)
 module.exports=shopCarModel