import React ,{Fragment} from "react"

import { Tabs,Table, Button } from 'antd';

import data  from "./data"
// import colums from "./colums";

const { TabPane } = Tabs;




class Role extends React.Component{
    constructor(){
        super();
        this.state={
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
            
                  },
                  {
                    title: '操作',
                    dataIndex: 'active',
                    key:"active",
                    render(){
                       return ( 
                            <div>
                        <Button type="primary">权限设置</Button>
                        <Button type="primary">编辑</Button>
                        <Button type="danger">删除</Button>
     
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
          this.getTabledata()
      }
      getTabledata(){
          this.setState({data:data})

      }
    render(){
        return(
    <Fragment>
 {/* 选项卡 */}
<Tabs onChange={this.callback} type="card">
    <TabPane tab="角色管理" key="1">
    <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
          </span>
        </div>
        <Table  columns={this.state.columns} dataSource={this.state.data} />
      </div>
    </TabPane>
    <TabPane tab="添加角色" key="2">
      Content of Tab Pane 2
    </TabPane>
  </Tabs>,
            </Fragment>
        )
    }
}

export default Role






