import React ,{Fragment} from "react"
import { Tabs,Table, Button ,Popconfirm,message,Spin,Card} from 'antd';
import  {getrole,delrole,addrole}  from "../../api/role"
const { TabPane } = Tabs;




class Role extends React.Component{
    constructor(){
        super();
        this.state={
          name:"",
          des:"",
          state:"已禁用",
            loading:false,
             columns:[
                {
                    title: '角色名称',
                    dataIndex: 'name',
                    key:"name",
                  },
                  {
                    title: '角色描述',
                    dataIndex: 'des',
                    key:"des",
                  },
                  {
                    title: '状态',
                    dataIndex: 'state',
                    key:"state",
                    render(data){
                      return (
                        <Button type="danger">{data}</Button>
                      )
                    }
                  },
                  {
                    title: '操作',
                    dataIndex: '_id',
                    key:"active",
                    render:(data)=>{
                       return ( 
                          <div>
                        <Button disabled  type="primary" >权限设置</Button>
                        <Button type="primary">编辑</Button>
                        <Popconfirm  
                        title="你确定要删除吗?"
                        onConfirm={()=>{
                          console.log(data)
                          delrole(data).then((res)=>{
                            // console.log(res)
                            // message.info("删除成功",1)
                            this.setState({loading:true})
                            this.getTabledata();
                          })
                         
                        }}
                        onCancel={()=>{message.info("已取消",1)}}
                        okText="确定"
                        cancelText="取消">
                        <Button type="danger">删除</Button>
                        </Popconfirm>
     
                    </div>)
                  }
                }
            ],
             data:[],
        }
    }
  callback(key) {
        console.log(key);
      }
      componentDidMount(){
         this.setState({loading:true})
      this.getTabledata()
      }
      getTabledata(){
          getrole().then((data)=>{this.setState({data:data.list.roles,loading:false})})
          .catch((err)=>{console.log(err)})
      }
    render(){
        return(
    <Fragment>
 {/* 选项卡 */} 
   <Tabs onChange={this.callback} type="card">
    <TabPane tab="角色管理" key="1">
    <Card>
    <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
          </span>
        </div>
    <Spin  spinning={this.state.loading}>
        <Table  rowKey="_id" columns={this.state.columns} dataSource={this.state.data} />
    </Spin>
      </div>
    </Card>
    </TabPane>
    <TabPane tab="添加角色" key="2">
     <Card>
     <form>
          <span><p>角色名称:<input type="text" 
          value={this.state.name} 
           onChange={(e)=>{
            this.setState({name:e.target.value})
          }}/></p></span>
          <span><p>角色描述:<input 
          value={this.state.des} 
           onChange={(e)=>{
            this.setState({des:e.target.value})
          }}/></p></span>
          状态:<select  value={this.state.state}
           onChange={(e)=>{
            this.setState({state:e.target.value})
          }}>
            <option value="已禁用">已禁用</option>
            <option value="已启用">已启用</option>
          </select>
          <Button onClick={()=>{
          let  name= this.state.name
          let  des= this.state.des
          let  state= this.state.state
          console.log(name,des,state)
           addrole(name,des,state)
           .then((data)=>{
             message.info(data.msg,1)
            })
          }}>添加</Button>

   </form>
     </Card>
    </TabPane>
    </Tabs>,
            </Fragment>
        )
    }
}

export default Role






