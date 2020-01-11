const   Employe=require("../db/model/EmployeesList")

// 获取员工列表
async function get(page,pageSize){
    // 获取总的食品数据数组
    let allEmployes =await Employe.find()
    // 获取视食品数据 总数量
    let allCount =allEmployes.length 
    let Employes = await Employe.find().skip((page-1)*pageSize).limit(pageSize)
    return  {Employes,allCount}
  }

//   添加员工
  async function add(user,name,passWord,mail,role,time){
    let Employedata=await Employe.insertMany({user,name,passWord,mail,role,time})
    return  Employedata
  }


//   删除员工
     async function del(_id){
        let Employes = await Employe.findOneAndDelete({_id})
        return  Employes
      }

      //   修改员工
  async function update(_id,user,name,passWord,mail,role,time){
    let Employedata=await Employe.updateOne({_id},{user,name,passWord,mail,role,time})
    return  Employedata
  }

        // 关键字查询+分页
async function getByKw(kw,page,pageSize){
    let regex=new RegExp(kw) //查询关键字的正则 
    let allEmployes=await Employe.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]})
    let  allCount = allEmployes.length
    let  Employes=await Employe.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
    return {Employes,allCount}
}
module.exports={
    get,add,del,update,getByKw
}
