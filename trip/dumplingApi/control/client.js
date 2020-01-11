const client=require("../db/model/clients")

// 获取客户列表
async function get(page,pageSize){
    // 获取总的食品数据数组
    let allclients =await client.find()
    // 获取视食品数据 总数量
    let allCount =allclients.length 
    let clients = await client.find().skip((page-1)*pageSize).limit(pageSize)
    return  {clients,allCount}
  }

  //   添加客户
  async function add(name,iphone,Source,MessageTime,type,remark){
    let clientdata=await client.insertMany({name,iphone,Source,MessageTime,type,remark})
    return  clientdata
  }

  //   删除客户
  async function del(_id){
    let clients = await client.findOneAndDelete({_id})
    return  clients
  }
      //   修改员工
      async function update(_id,name,iphone,Source,MessageTime,type,remark){
        let clientdata=await client.updateOne({_id},{name,iphone,Source,MessageTime,type,remark})
        return  clientdata
      }


      // 关键字查询+分页
async function getByKw(kw,page,pageSize){
    let regex=new RegExp(kw) //查询关键字的正则 
    let allclients=await client.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]})
    let  allCount = allclients.length
    let  clients=await client.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
    return {clients,allCount}
}
module.exports={
    get,add,del,update,getByKw
}