import axios from '../utils/axios'

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