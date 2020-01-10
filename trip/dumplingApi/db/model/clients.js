 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  clientsSchema=new Schema({
    // 客户名称
     name:  {type:String,required:true}, 
    //  客户电话
     iphone:      {type:Number,required:true},
    //  来源平台
     Source :   {type:String,required:true},
    //  留言时间
     MessageTime:      {type:String,required:true, default:Date.now},
    // 咨询的产品种类
     type:     {type:String,required:true},
    //备注
     remark:      {type:String,required:true},

 })
//  客户相关的数据库
 let clients=mongoose.model('clients',clientsSchema)
 module.exports=clients