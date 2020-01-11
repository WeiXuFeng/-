import axios from '../utils/axios'

// 获取客户列表
export const getClient=(page,pageSize,token) =>{
    return new Promise((reslove,reject)=>{
        let url="/hehe/v1/admin//client/getClient"
        axios.post(url,{token,page,pageSize})
        .then((res)=>{
            reslove(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
// 删除客户列表
export const delClient=(_id,token) =>{
    return new Promise((reslove,reject)=>{
        let url="/hehe/v1/admin/client/delClient"
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

//添加客户列表
export const addClient=(name,iphone,Source,MessageTime,type,remark,token) =>{
    return new Promise((reslove,reject)=>{
        let url="/hehe/v1/admin//client/addClient"
        axios.post(url,{token,name,iphone,Source,MessageTime,type,remark})
        .then((res)=>{
            reslove(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}