import axios from './../utils/axios'
//登录
export const UserLogin=(userName,passWord) =>{
    return new Promise((reslove,reject)=>{
        let url="/hehe/v1/admin/user/login"
        axios.post(url,{userName,passWord})
        .then((res)=>{
            reslove(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
//退出登录
export const UserLogout=(uId) =>{
    return new Promise((reslove,reject)=>{
        let url="/hehe/v1/admin/user/logout"
        axios.post(url,uId)
        .then((res)=>{
            reslove(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}