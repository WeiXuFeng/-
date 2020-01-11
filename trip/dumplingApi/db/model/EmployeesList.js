 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  EmployeesList=new Schema({
    //  用户名
     user: {type:String,required:true},
    //  姓名
     name: { type: String, default: Date.now},
    //  密码
     passWord:{type:String,required:true},
    //  密码
     mail:{type:String,required:true},
    //角色
     role:{type:String,required:true},
    //登录时间
     time:{type:String,default: Date.now}
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
 let Employe=mongoose.model('employes',EmployeesList)
 module.exports=Employe