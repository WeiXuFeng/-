import axios from './../unit/axios'

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