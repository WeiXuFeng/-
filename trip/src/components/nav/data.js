let list=[{
    name: "设置",
    type: "setting",
    id:"0", 
      children: [{
        name: "网站信息",
        type: "caret-right",
        id:"0-0"
    },{
        name: "上传设置",
        type: "caret-right",
        id:"0-1"
    },{
        name: "文件存储",
        type: "caret-right",
        id:"0-2"
    }]
}, {
    name: "用户管理",
    type: "user",
    id:"1",
    children: [{
        name: "员工管理",
        type: "caret-right",
        id:"1-0",
        children: [{
            name: "角色管理",
            type: "caret-right",
            id:"1-0-1"
        },{
            name: "员工列表",
            type: "caret-right",
            id:"1-0-2"
        },{
            name: "登录日志",
            type: "caret-right",
            id:"1-0-3"
        }]
    }]
}, {
    name: "客户管理",
    type: "setting",
    id:"2",
},{
    name: "跟单记录",
    type: "history",
    id:"3",
}]
export default list