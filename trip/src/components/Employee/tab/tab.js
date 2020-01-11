import React, { Component } from 'react'
import {Table,Button,Modal, message,Pagination} from 'antd'
 import {staffLife,del} from './../../../api/staff'
import {getItem} from '../../../utils/webStorage'
class Tab extends Component{
    abcdefg(){
        let page=1;
        let pageSize=5;
        let token=getItem('user_token')
        staffLife(page,pageSize,token)
        .then(date=>{
            console.log(date)
            // this.dataSource=date.list.Employes
    
            this.setState({dataSource:date.list.Employes})
        })
        .catch(err=>{
           
        })
    }
    constructor(){
        super()
        this.state={
            pageSize:5,
            page:1,
            total:0,
            columns:[{
                title: '客户名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
              },
              {
                title: '编号',
                dataIndex: '_id',
                key: '_id',
              },
              {
                title: '客户管理者',
                dataIndex: 'user',
                key: 'user',
              },
              {
                title: '客户邮箱',
                dataIndex: 'mail',
                key: 'mail',
              },
              {
                  title:'操作',
                  dataIndex:'_id',
                  key:"id",
                  render:(_id)=>{
                      return(
                          <div>
                            
                                  <Button
                                 type="primary" onClick={()=>{
                                     message.error('禁止修改员工')
                                    }
                                 }
                              >编辑</Button>
                              <Button onClick={()=>{
                                  del(_id)
                                  .then(data=>{
                                      message.info('删除成功,删除的id为'+_id)
                                      this.getTabledate()
                                  })
                                  .then()
                              }}>删除</Button>
                          </div>
                      )
                  }
              }
            ],
            dataSource:[]
        }
    }
    
componentDidMount(){
 this.getTabledate();
    
}
getTabledate(){
    let page=this.state.page;
    let pageSize=this.state.pageSize;
    let token=getItem('user_token')
    staffLife(page,pageSize,token)
    .then(date=>{
        console.log(date)
        // this.dataSource=date.list.Employes
        this.setState({dataSource:date.list.Employes,total:date.list.allCount})
    })
    .catch(err=>{
       
    })
}
    render(){
        return(
            <div>
            <Table pagination={false} columns={this.state.columns}  rowKey={"_id"} dataSource={this.state.dataSource}>
          
          </Table>
        <Pagination pageSize={this.state.pageSize} total={this.state.total} onChange={(newPage,total)=>{
            staffLife(newPage,total)
            .then(date=>{
                console.log(date)
                // this.dataSource=date.list.Employes
                this.setState({dataSource:date.list.Employes,total:date.list.allCount})
            })
            .catch(err=>{
               
            })
        }}></Pagination>
        </div>
)
    }


}

export default Tab