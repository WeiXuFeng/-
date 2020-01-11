const express = require('express')
const router = express.Router()
const role=require("../../control/role")
// 获取角色列表
/**
* @api {post} /role/getrole  获取角色管理数据
* @apiName /role/getrole    获取角色管理数据
* @apiGroup  role           接口属于哪种类型
* @apiParam {String} page    显示第几页
* @apiParam {String} pagesize 一页显示几条
* @apiParam {String} token   token值


* @apiSuccess {String}  mages  错误信息
*/
router.post("/getrole",(req,res)=>{
    let page=Number(req.body.page)||1
    let pageSize=Number(req.body.pageSize)||3
    role.get({page,pageSize}) .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'查询ok',list:data})
      })
      .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:'查询失败'})})
    })


    /**
* @api {post} /role/addrole  添加角色
* @apiName /role/addrole    添加角色
* @apiGroup  role           接口属于哪种类型
* @apiParam {String} name    名字
* @apiParam {String} des    描述
* @apiParam {String} state  状态
* @apiParam {String} token   token值

* @apiSuccess {String}  mages  错误信息
*/
    // 添加角色管理
   router.post("/addrole",(req,res)=>{
    let {name,des,state}=req.body
    role.add(name,des,state) .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'添加ok'})
      })
      .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:'添加失败'})})
    })

    /**
* @api {post} /role/delrole  删除角色
* @apiName /role/delrole    删除角色
* @apiGroup  role           接口属于哪种类型
* @apiParam {String} _id     角色id
* @apiParam {String} token   token值
* @apiSuccess {String}  mages  错误信息
*/
     // 删除角色管理
   router.post("/delrole",(req,res)=>{
    let {_id}=req.body
    role.del(_id) .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'删除ok'})
      })
      .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:'删除失败'})})
    })


        /**
* @api {post} /role/updaterole  修改角色
* @apiName /role/updaterole    修改角色
* @apiGroup  role           接口属于哪种类型
* @apiParam {String} _id     角色id
* @apiParam {String} name    名字
* @apiParam {String} des    描述
* @apiParam {String} state  状态
* @apiParam {String} token   token值
* @apiSuccess {String}  mages  错误信息
*/
    // 修改角色管理
router.post('/updaterole',(req,res)=>{
  let {_id,name,des,state} = req.body
  console.log(_id,name,des,state)
   role.update(_id,name,des,state)
  .then((data)=>{res.send({err:0,msg:'修改ok',list:data})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
}) 
module.exports= router