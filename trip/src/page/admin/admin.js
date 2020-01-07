import React from  "react"
import { Layout,Menu, Icon,Dropdown,message} from 'antd';
import styles from "./admin.module.less"
import Nav from "../../components/nav/nav"
const { Header, Content, Sider } = Layout;
const arr=[{id:1,name:"网站信息",type:"setting", path:""},{id:2,name:"个人信息",type:"user",path:""},{id:3,name:"密码修改",type:"user",path:""},{id:4,name:"退出",type:"logout",path:""}]
class Admin  extends React.Component{
    
    render(){
        return(
     <Layout className={styles.admin_wraper}>
         {/* 这是头部 */}
       <Header className={styles.admin_header}>
           {/* 这是logo */}
        <h2 className={styles.admin_header_logo}>客户管理系统</h2>
        <div>
        <Dropdown overlay={()=>{
                return (
                  <Menu>
                      {arr.map((item)=>{
                        return (
                          <Menu.Item key={item.id}>
                         <span>
                        <Icon type={item.type}></Icon>
                        {item.name}
                      </span>
                    </Menu.Item>
                        )
                      })}
                  </Menu> 
                )
               
              }}>
                <a >你好,admin</a>
         </Dropdown>   
     </div>
  </Header>
  <Layout>
    <Sider width={200} style={{ background: '#fff' }}>
              <Nav></Nav>
    </Sider>
    <Layout style={{ padding: '0 24px 24px' }}>

      <Content
        style={{
            margin: '16px 0' ,
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    </Layout>
  </Layout>
</Layout>
        )
    }
}
export default Admin 




