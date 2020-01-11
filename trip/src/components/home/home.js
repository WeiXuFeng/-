import React from  "react"
import {withRouter} from 'react-router-dom'
import {Card,Button} from 'antd'
import styles from './home.module.less'
class Home extends React.Component{
    render(){
        return(
            <Card title='用户管理信息'>
                <div className={styles.box}>
                    <Button type="danger" className={styles.button} onClick={()=>{
                        this.props.history.push('/admin/info')
                    }}>网站信息</Button>
                    <Button type='primary' className={styles.button} onClick={()=>{
                        this.props.history.push('/admin/updateSetting')
                    }}>内容上传</Button>
                    <Button type="danger" className={styles.button} onClick={()=>{
                        this.props.history.push('/admin/role')
                    }}>角色管理</Button>
                    <Button type='primary' className={styles.button} onClick={()=>{
                        this.props.history.push('/admin/Employee')
                    }}>员工列表</Button>
                    <Button type="danger" className={styles.button} onClick={()=>{
                        this.props.history.push('/admin/records')
                    }}>数据视图</Button>
                </div>
                
            </Card>
        )
    }
}
export default withRouter(Home)