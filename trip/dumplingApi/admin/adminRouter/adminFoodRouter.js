const express = require('express')
const router = express.Router()
const Food = require('../../control/foodController')


/**
* @api {post} /food/getFoods  获取数据
* @apiName /food/getFoods    获取食品
* @apiGroup  Food       接口属于哪种类型
* @apiParam {String} page    显示第几页
* @apiParam {String} pagesize 一页显示几条

* @apiSuccess {String}  mages  错误信息
*/
//查询接口（分页查询  分类查询 关键字查询）
router.post('/getFoods',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize=Number(req.body.pageSize)||2
  Food.get(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询失败'})})
})

/**
* @api {post} /food/getFoodsByType  根据类型查找数据
* @apiName /food/getFoodsByType    根据类型查找数据
* @apiGroup  Food       接口属于哪种类型
* @apiParam {String} page    显示第几页
* @apiParam {String} pagesize 一页显示几条
* @apiParam {String} foodType  类型
* @apiSuccess {String}  mages  错误信息
*/
// 分类查询
router.get('/getFoodsByType',(req,res)=>{
  let {foodType} = req.query 
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  Food.getByType(foodType,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
})

/**
* @api {post} /food/getFoodsByKw    关键字查找
* @apiName /food/getFoodsByKw      关键字查找
* @apiGroup  Food       
* @apiParam {String} page    显示第几页
* @apiParam {String} pagesize 一页显示几条
* @apiParam {String} kw  关键字
* @apiSuccess {String}  mages  错误信息
*/
// 关键字查询
router.get('/getFoodsByKw',(req,res)=>{
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  let kw = req.query.kw 
  Food.getByKw(kw,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'ok',list:data})
  })
})

/**
* @api {post} /food/delFood   删除数据
* @apiName /food/delFood      删除数据
* @apiGroup  Food       

* @apiParam {String} foodId     商品id
* @apiSuccess {String}  mages  错误信息
*/
//删除接口
router.post('/delFood',(req,res)=>{
  let  {foodId}=req.body
  Food.del(foodId)
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'del nook'})
  })
})
/**
* @api {post} /food/addFood   添加数据
* @apiName /food/addFood    添加数据
* @apiGroup  food       

* @apiParam {String} name     
* @apiParam {String} price     
* @apiParam {String} img     
* @apiParam {String} foodType     
* @apiSuccess {String}  mages  错误信息
*/
//添加数据
router.post('/addFood',(req,res)=>{
  let {name,price,img,foodType,desc} = req.body 
  Food.add(name,price,img,foodType,desc)
  .then((data)=>{res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})})
})
//修改 
router.get('/updateFood',(req,res)=>{
  let {foodId,name,price,img,foodType,desc} = req.query 
  Food.update(foodId,name,price,img,foodType,desc)
  .then((data)=>{res.send({err:0,msg:'修改ok'})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})
module.exports = router