import React  from "react"
import { Table,Pagination,Button,message ,Popconfirm,Spin,Tabs ,Card} from 'antd';
import {getClient ,delClient} from "../../api/colums"
import  AdaddCustomerd from "./addCustomer"
const { TabPane } = Tabs;



class Customer extends React.Component{
    constructor(){
        super()
        this.state={
            page:1,
            pageSize:5,
            total:0,
            loading:false,
            data:[],
            colums:[ {
                title: '客户名称',
                dataIndex: 'name',
                key:"name",
                width:200,
                fixed: 'left',
              },{
                title: '客户电话',
                dataIndex: 'iphone',
                key:"iphone",
                width:200,
              },
              {
                title: '来源平台',
                dataIndex: 'Source',
                key:"Source",
                width:200,
              },{
                title: '留言时间',
                dataIndex: 'MessageTime',
                key:"MessageTime",
                width:200,
              },{
                title: '咨询的产品种类',
                dataIndex: 'type',
                key:"type",
                width:200,
              },{
                title: '录入时间',
                dataIndex: 'time',
                key:"time",
                width:200,
                render(){    
                 let time=new Date().toLocaleString()
                    return (
                    <p>{time}</p>
                    )
                }
              },{
                    title: '操作',
                    dataIndex: '_id',
                    key:"active",
                    fixed: 'right',
                    render:(data)=>{
                       return ( 
                        <div>
                        <Button disabled  type="primary" >修改客户</Button>
                        <Popconfirm  
                        title="你确定要删除吗?"
                        onConfirm={()=>{
                          console.log(data)
                          delClient(data).then((res)=>{
                            this.setState({loading:true})
                            this.getTabledata();
                          })
                         
                        }}
                        onCancel={()=>{message.info("已取消",1)}}
                        okText="确定"
                        cancelText="取消">
                        <Button type="danger">删除客户</Button>
                        </Popconfirm>
     
                    </div>)
                  }
              }],
        }
    }
    componentDidMount(){
        this.setState({loading:true})
        this.getTabledata()
    }
    getTabledata(){
        getClient(this.state.page,this.state.pageSize).then((data)=>{
            console.log(data)
            this.setState({data:data.list.clients,total:data.list.allCount,loading:false})
        })  
    }
    render(){
        return(
           <div>
<Tabs >
    <TabPane tab="客户管理" key="1">
     <div>
      <Spin spinning={this.state.loading}>
         <Table   scroll={{ x:500, y: 300 }} pagination={false} rowKey={"_id"}   columns={this.state.colums} dataSource={this.state.data} />
      </Spin>
      <Pagination total={this.state.total} pageSize={this.state.pageSize}   onChange={(newPage,pageSize)=>{
           getClient(newPage,pageSize)
           .then((data)=>{
             console.log(data)
             this.setState({data:data.list.clients,loading:false,total:data.list.allCount,loading:false})
           })
           .catch((err)=>{console.log(err)})
        }}></Pagination>
     </div>
     </TabPane>
     <TabPane tab="添加客户" key="2">
      <Card>
       <AdaddCustomerd></AdaddCustomerd>
      </Card>
     </TabPane>
     </Tabs>,
 </div>
        )
    }
}

export default Customer



