 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  adminSchema=new Schema({
    //  用户账号
     userName:      {type:String,required:true},
    //  用户密码
     passWord:      {type:String,required:true},
    //  token
     token: {type:String},
    //  用户权限
     rootList: {type:Array,required:true},
    //  用户登陆的时间
     ctime: { type: Date, default: Date.now }

 })

//  用户数据库
 let adminsModel=mongoose.model('admins',adminSchema)
 module.exports=adminsModel