import React ,{Fragment} from "react"
import Pie from '../Echarts/Pie'
import Line from '../Echarts/Line'
import Column from '../Echarts/column'
class Records extends React.Component{
    render(){
        return(
            <Fragment>
                <div style={{display:'flex'}}>
                    <Pie></Pie>
                    <Line></Line>
                </div>
                <Column></Column>
            </Fragment>
        )
    }
}

export default Records