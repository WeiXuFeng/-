import React,{Component} from 'react'         
import {HashRouter,Route,Switch} from 'react-router-dom'
import Login from '../page/Login/login'
class Router extends Component{
    render(){
        return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
            </Switch>
        </HashRouter>
    )
    }
}
export default Router