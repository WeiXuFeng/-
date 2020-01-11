import React ,{Fragment} from "react"
import {withRouter,Link} from 'react-router-dom'
import Site from './site/site'
class Info extends React.Component{
    image(){
        console.log(this)
    }
    render(){
        return(
            <Fragment>
                <div> 
                <Site></Site>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Info)