const  express=require("express")
const  router=express.Router();
const  employe=require("../../control/employe");


/**
* @api {post} /employe/getEmploye  获取员工列表
* @apiName /employe/getEmploye    获取员工列表
* @apiGroup  employe           接口属于哪种类型
* @apiParam {String} page    第几页
* @apiParam {String} pageSize      显示几条
* @apiParam {String} token   token值
* @apiSuccess {String}  mages  错误信息
*/
    router.post("/getEmploye",(req,res)=>{
        let page=Number(req.body.page)||1
        let pageSize=Number(req.body.pageSize)||3
        employe.get({page,pageSize}).then((data)=>{
            res.send({err:0,msg:'查询ok',list:data})
          })
          .catch(()=>{
            res.send({err:-1,msg:'查询失败'})})
        })

 /**
* @api {post} /employe/addEmploye  添加员工
* @apiName /employe/addEmploye    添加员工
* @apiGroup  employe           接口属于哪种类型
* @apiParam {String}  user     用户名
* @apiParam {String}  name     姓名
* @apiParam {String}  passWord    密码
* @apiParam {String}  mail    邮箱
* @apiParam {String}  role    角色
* @apiParam {String}  time    时间
* @apiParam {String} token   token值
* @apiSuccess {String}  mages  错误信息
*/
    router.post("/addEmploye",(req,res)=>{
            let {user,name,passWord,mail,role,time}=req.body
            console.log(user,name,passWord,mail,role,time)
            employe.add(user,name,passWord,mail,role,time).then((data)=>{
                res.send({err:0,msg:'添加ok',list:data})
              })
              .catch(()=>{
                res.send({err:-1,msg:'添加失败'})})
    })
 /**
* @api {post} /employe/delEmploye  删除员工
* @apiName /employe/delEmploye    删除员工
* @apiGroup  employe           接口属于哪种类型
* @apiParam {String}  token   token值
* @apiParam {String}  _id      员工id

* @apiSuccess {String}  mages  错误信息
*/
    router.post("/delEmploye",(req,res)=>{
        let {_id}=req.body
        employe.del(_id).then((data)=>{
            res.send({err:0,msg:'删除ok',list:data})
          })
          .catch(()=>{
            res.send({err:-1,msg:'删除失败'})})
})

 /**
* @api {post} /employe/updateEmploye  修改员工
* @apiName /employe/updateEmploye    修改员工
* @apiGroup  employe           接口属于哪种类型
* @apiParam {String}  _id      员工id
* @apiParam {String}  user     用户名
* @apiParam {String}  name     姓名
* @apiParam {String}  passWord    密码
* @apiParam {String}  mail    邮箱
* @apiParam {String}  role    角色
* @apiParam {String}  time    时间
* @apiParam {String} token   token值
* @apiSuccess {String}  mages  错误信息
*/
//修改员工
router.post("/updateEmploye",(req,res)=>{
    let {_id,user,name,passWord,mail,role,time}=req.body
    console.log(_id,user,name,passWord,mail,role,time)
    employe.update(_id,user,name,passWord,mail,role,time).then((data)=>{
        res.send({err:0,msg:'修改ok',list:data})
      })
      .catch(()=>{
        res.send({err:-1,msg:'修改失败'})})
})

/**
* @api {get} /employe/getEmployeByKw  关键字查询
* @apiName  /employe/getEmployeByKw    关键字查询
* @apiGroup  employe           接口属于哪种类型
* @apiParam {String} kw       关键字
* @apiParam {String} token   token值
* @apiSuccess {String}  mages  错误信息
*/
// 关键字查询
router.get('/getEmployeByKw',(req,res)=>{
    let page=Number(req.query.page)||1
    let pageSize = Number(req.query.pageSize)||2
    let kw = req.query.kw 
    employe.getByKw(kw,page,pageSize)
    .then((data)=>{
      res.send({err:0,msg:'ok',list:data})
    })
  })



module.exports=router;