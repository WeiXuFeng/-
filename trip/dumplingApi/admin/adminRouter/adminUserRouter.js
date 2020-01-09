const express = require('express')
const router =express.Router()
const jwt = require('../../utils/jwt')
const adminModel = require('../../db/model/adminModel')

/**
* @api {post} /user/login  登录
* @apiName /user/login     登录
* @apiGroup  user       

* @apiParam {String} userName    用户名
* @apiParam {String} passWord    密码
* @apiSuccess {String}  mages  错误信息
*/
router.post('/login',(req,res)=>{
  let {userName,passWord} = req.body 
  console.log(userName,passWord)
  let rootList=[]
  let token=null
  let _id=''
  adminModel.findOne({userName,passWord})
  .then((db)=>{
    if(!db) return  res.send({err:-1,msg:'login nook'})
    rootList=db.rootList
     _id=db._id
     token =jwt.createToken({},60*60)
    return adminModel.updateMany({_id},{token})
  })
  .then((db)=>{
    res.send({err:0,msg:'ok',token,rootList,uid:_id})
  })
})


/**
* @api {post} /user/logout  退出登录
* @apiName /user/logout     退出登录
* @apiGroup  user       
* @apiParam {String} _id    用户名id
* @apiParam {String} token   token
* @apiSuccess {String}  mages  错误信息
*/
router.post('/logout',(req,res)=>{
  let {uid} = req.body 
  let rootList=[]
  let token=null
  adminModel.updateMany({_id:uid},{token:''})
  .then(()=>{
    res.send({err:0,msg:'logout ok'})
  })

})

module.exports=router