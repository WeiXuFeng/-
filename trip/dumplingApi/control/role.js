const role= require('../db/model/roles')
// 获取角色管理列表
async function get(page,pageSize){
    // 获取总的食品数据数组
    let allroles =await role.find()
    // 获取视食品数据 总数量
    let allCount =allroles.length 
    let roles = await role.find().skip((page-1)*pageSize).limit(pageSize)
    return  {roles,allCount}
  }

   //  添加角色管理   
  async function add(name,des,state){
    let roles = await role.insertMany({name,des,state})
    return  {roles}
  }
     // 删除角色管理   
     async function del(_id){
        let roles = await role.findByIdAndRemove({_id})
        return  {roles}
      }

      // 修改
async function update(_id,name,des,state){
  console.log(_id,name,des,state)
  let result  = await role.updateOne({_id},{name,des,state})
   return  result
}

  module.exports={
      get,add,del,update
  }