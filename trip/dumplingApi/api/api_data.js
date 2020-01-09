define({ "api": [
  {
    "type": "post",
    "url": "/food/getFoodsByType",
    "title": "根据类型查找数据",
    "name": "_food_getFoodsByType_________",
    "group": "Food_________",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>显示第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": "<p>一页显示几条</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodType",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mages",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/adminRouter/adminFoodRouter.js",
    "groupTitle": "Food_________"
  },
  {
    "type": "post",
    "url": "/food/getFoods",
    "title": "获取数据",
    "name": "_food_getFoods_____",
    "group": "Food_________",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>显示第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": "<p>一页显示几条</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mages",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/adminRouter/adminFoodRouter.js",
    "groupTitle": "Food_________"
  },
  {
    "type": "post",
    "url": "/food/delFood",
    "title": "删除数据",
    "name": "_food_delFood_____",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodId",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mages",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/adminRouter/adminFoodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/getFoodsByKw",
    "title": "关键字查找",
    "name": "_food_getFoodsByKw______",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>显示第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": "<p>一页显示几条</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mages",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/adminRouter/adminFoodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/addFood",
    "title": "添加数据",
    "name": "_food_addFood_____",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodType",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mages",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/adminRouter/adminFoodRouter.js",
    "groupTitle": "food"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "登录",
    "name": "_user_login___",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mages",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/adminRouter/adminUserRouter.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/logout",
    "title": "退出登录",
    "name": "_user_logout_____",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户名id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mages",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/adminRouter/adminUserRouter.js",
    "groupTitle": "user"
  }
] });
