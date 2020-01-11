import axios from '../utils/axios'

//请求用户信息接口
export const staffLife=(page,pageSize,token) =>{
    return new Promise((reslove,reject)=>{
        let url="/hehe/v1/admin/employe/getEmploye"
        let data={page,pageSize,token}
        axios.post(url,data)
        .then((res)=>{
            reslove(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

//添加用户接口
export const staffAdd=(user,name,passWord,mail,role,time,token) =>{
    return new Promise((reslove,reject)=>{
        let url="/hehe/v1/admin/employe/addEmploye"
        let data={user,name,passWord,mail,role,time,token}
        axios.post(url,data)
        .then((res)=>{
            reslove(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

// 删除用户接口
export const del=(_id,token) =>{
    console.log(_id,token)
    return new Promise((reslove,reject)=>{
        let url="/hehe/v1/admin/employe/delEmploye"
        let data={_id,token}
        axios.post(url,data)
        .then((res)=>{
            reslove(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}