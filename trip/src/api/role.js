import axios from '../utils/axios'

// 获取角色列表
export const getrole=(token) =>{
    return new Promise((reslove,reject)=>{
        let url="/hehe/v1/admin/role/getrole"
        axios.post(url,{token})
        .then((res)=>{
            reslove(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
// 删除角色
export const delrole=(_id,token) =>{
    return new Promise((reslove,reject)=>{
        let url="/hehe/v1/admin/role/delrole"
        let data={token,_id}
        axios.post(url,data)
        .then((res)=>{
            reslove(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

// 添加角色
export const addrole=(name,des,state,token) =>{
    return new Promise((reslove,reject)=>{
        let url="/hehe/v1/admin/role/addrole"
        let data={name,des,state,token}
        axios.post(url,data)
        .then((res)=>{
            reslove(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}