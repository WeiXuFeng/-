import React,{Component} from 'react'         
import {HashRouter,Route,Switch,Redirect,Link} from 'react-router-dom'
import  loadable from "../utils/loadable"
import Admin from "../page/admin/admin"
import Site from '../components/info/site/site'
const Login=loadable(()=>import("../page/Login/login"))
const Home=loadable(()=>import("../components/home/home"))
const Info=loadable(()=>import("../components/info/info"))
const UpdateSetting=loadable(()=>import("../components/updateSetting/updateSetting"))
const File=loadable(()=>import("../components/file/file"))
const Role=loadable(()=>import("../components/role/role"))
const Employee=loadable(()=>import("../components/Employee/Employee"))
const Logging=loadable(()=>import("../components/logging/logging"))
const Customer=loadable(()=>import("../components/Customer/Customer"))
const Records=loadable(()=>import("../components/records/records"))


class Router extends Component{
    render(){
        return(
        <HashRouter>
            <Switch>
                <Route  path="/login" component={Login}></Route>
                <Route path="/admin" render={()=>{
                 return(
                     <Admin> 
                       <Switch>
                           <Route  path="/admin/home" component={Home}></Route>
                           <Route  path="/admin/info" component={Info}></Route>
                           <Route  path="/admin/updateSetting" component={UpdateSetting}></Route>
                           <Route  path="/admin/file" component={File}></Route>
                           <Route  path="/admin/role" component={Role}></Route>
                           <Route  path="/admin/Employee" component={Employee}></Route>
                           <Route  path="/admin/logging" component={Logging}></Route>
                           <Route  path="/admin/Customer" component={Customer}></Route>
                           <Route  path="/admin/records" component={Records}></Route>
                           <Redirect exact from="/admin" to="/admin/home"></Redirect>
                           <Route  render={()=>{
                               return(<h1>404页面丢失</h1>)
                           }}></Route>
                       </Switch>
                    </Admin>
                 )
                }}></Route>
                <Redirect exact from="/" to="/login"></Redirect>
                <Route  render={()=>{
                    return(<h1>404页面丢失</h1>)
                }}></Route>
            </Switch>
        </HashRouter>
    )
    }
}
export default Router