import React, { Component } from 'react'
import {Table,Divider, Tag } from 'antd'
 import {staffLife} from './../../../api/staff'
import {getItem} from '../../../utils/webStorage'
class Tab extends Component{
    constructor(){
        super()
        this.state={
            dataSource:[]
        }
    }
componentDidMount(){
    let page=1;
    let pageSize=5;
    let token=getItem('user_token')
    staffLife(page,pageSize,token)
    .then(date=>{
        console.log(date)
        this.dataSource=date.list.Employes
    })
    .catch(err=>{
       
    })
}
    render(){
        return(
          <Table>
              
          </Table>
        )
    }


}

export default Tab