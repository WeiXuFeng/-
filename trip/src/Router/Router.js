import React,{Component} from 'react'         
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import  loadable from "../utils/loadable"
import Admin from "../page/admin/admin"
const Login=loadable(()=>import("../page/Login/login"))
const Home=loadable(()=>import("../components/home/home"))


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
                           <Redirect exact from="/admin" to="/admin/home"></Redirect>
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