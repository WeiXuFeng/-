 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  roles=new Schema({
 
     name: { type: String},
    //  密码
     des:{type:String,required:true},
    //  密码
     state:{type:String,required:true},
 })


// 角色管理的数据库
 let Roles=mongoose.model('roles',roles)
 module.exports=Roles