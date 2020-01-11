const  express=require("express")
const  router=express.Router();
const  client=require("../../control/client");


/**
* @api {post} /client/getClient  获取客户列表
* @apiName  /client/getClient    获取客户列表
* @apiGroup  client           接口属于哪种类型
* @apiParam {String} page    第几页
* @apiParam {String} pageSize      显示几条
* @apiParam {String} token   token值
* @apiSuccess {String}  mages  错误信息
*/
    router.post("/getClient",(req,res)=>{
        let page=Number(req.body.page)||1
        let pageSize=Number(req.body.pageSize)||3
        client.get({page,pageSize}).then((data)=>{
            res.send({err:0,msg:'查询ok',list:data})
          })
          .catch(()=>{
            res.send({err:-1,msg:'查询失败'})})
        })

        /**
* @api {post} /client/addClient  添加客户
* @apiName  /client/addClient    添加客户
* @apiGroup  client           接口属于哪种类型
* @apiParam {String} name        姓名
* @apiParam {String} iphone     电话
* @apiParam {String} Source     来源平台
* @apiParam {String}  MessageTime   留言时间
* @apiParam {String} type     咨询的产品种类
* @apiParam {String} remark     备注
* @apiParam {String} token   token值
* @apiSuccess {String}  mages  错误信息
*/
    router.post("/addClient",(req,res)=>{
            let {name,iphone,Source,MessageTime,type,remark}=req.body
            console.log(name,iphone,Source,MessageTime,type,remark)
            client.add(name,iphone,Source,MessageTime,type,remark).then((data)=>{
                res.send({err:0,msg:'添加ok',list:data})
              })
              .catch(()=>{
                res.send({err:-1,msg:'添加失败'})})
    })
/**
* @api {post} /client/delClient  删除客户
* @apiName  /client/delClient    删除客户
* @apiGroup  client           接口属于哪种类型
* @apiParam {String} token   token值
* @apiParam {String} _id      客户id
* @apiSuccess {String}  mages  错误信息
*/
    router.post("/delClient",(req,res)=>{
        let {_id}=req.body
        client.del(_id).then((data)=>{
            res.send({err:0,msg:'删除ok',list:data})
          })
          .catch(()=>{
            res.send({err:-1,msg:'删除失败'})})
})

        /**
* @api {post} /client/updateClient  修改客户
* @apiName  /client/updateClient    修改客户
* @apiGroup  client           接口属于哪种类型
* @apiParam {String} _id      客户id
* @apiParam {String} name        姓名
* @apiParam {String} iphone     电话
* @apiParam {String} Source     来源平台
* @apiParam {String}  MessageTime   留言时间
* @apiParam {String} type     咨询的产品种类
* @apiParam {String} remark     备注
* @apiParam {String} token   token值
* @apiSuccess {String}  mages  错误信息
*/
router.post("/updateClient",(req,res)=>{
    let {_id,name,iphone,Source,MessageTime,type,remark}=req.body
    console.log(_id,name,iphone,Source,MessageTime,type,remark)
    client.update(_id,name,iphone,Source,MessageTime,type,remark).then((data)=>{
        res.send({err:0,msg:'修改ok',list:data})
      })
      .catch(()=>{
        res.send({err:-1,msg:'修改失败'})})
})


/**
* @api {get} /client/getClientByKw  关键字查询
* @apiName  /client/getClientByKw    关键字查询
* @apiGroup  client           接口属于哪种类型
* @apiParam {String} kw       关键字
* @apiParam {String} token   token值
* @apiSuccess {String}  mages  错误信息
*/
// 关键字查询
router.get('/getClientByKw',(req,res)=>{
    let page=Number(req.query.page)||1
    let pageSize = Number(req.query.pageSize)||2
    let kw = req.query.kw 
    client.getByKw(kw,page,pageSize)
    .then((data)=>{
      res.send({err:0,msg:'ok',list:data})
    })
  })

module.exports=router;