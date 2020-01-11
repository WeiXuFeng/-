const express = require('express')
const router =express.Router()

const Login = require('./adminRouter/adminUserRouter')
const Role=require("./adminRouter/adminRole")
const Employe=require("./adminRouter/adminEmploye")
const  Client=require("./adminRouter/adminClients")
// 用户登录相关
router.use('/user',Login)
// 角色管理相关
router.use("/role",Role)
// 员工列表相关
router.use("/employe",Employe)
// 客户管理
router.use("/client",Client)

module.exports=router