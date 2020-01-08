import React,{Fragment}  from "react"
import {  Menu,  Icon } from 'antd';
import styles from "../../page/admin/admin.module.less"
import List from "./data"
import {Link} from "react-router-dom"
const { SubMenu } = Menu;

class Nav extends React.Component{
    constructor(){
      super()
      this.state={
        List:[],
        icon:[{id:1,icon:"home",path:"/admin/home"},{id:2,icon:"file",path:"/admin/file"},{id:3,icon:"delete"},{id:4,icon:"sync"}],
      }
    }
    componentDidMount(){  
      this.setState({List:List})
    }
      navdata(item,index){
          if(item.children){
              return (<SubMenu key={index}
                  title={
                  <span>
                  <Icon type={item.type} />
                  <span>{item.name}</span>
                  </span>
                }
                >
               {item.children.map((childrenitem,childrenindex)=>{
                  return this.navdata(childrenitem,childrenindex)
               })}
              </SubMenu>)
          }else{
              return (
              <Menu.Item key={index}> 
              <span>
              <Link to={item.path}>
                 <Icon type={item.type} />
                 {item.name}
              </Link>
                </span>

              </Menu.Item>)
          }
      }
      render(){
          return(
      <Fragment>
          <div className={styles.admin_Icon}>
              {this.state.icon.map((item)=>{
                  return (<Link to={item.path}><Icon type={item.icon} theme="filled" key={item.id}/></Link>)
              })}
          </div>
       <Menu
       mode="inline">
           {this.state.List.map((item,index)=>{
             return   this.navdata(item,index)
           })}
    </Menu>
  </Fragment>
          )
      }
  }

export default Nav