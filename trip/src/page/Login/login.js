import React,{Component,Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import { Form, Icon, Input, Button,message } from 'antd';
import './sign.less'
import {UserLogin} from './../../api/user'
import {setItem} from '../../utils/webStorage'
class Login extends Component{
   login=()=>{
       let {validateFields} = this.props.form
    validateFields((err,data)=>{
        if(err){
            message.err('用户输入不正确')
        }else{
            UserLogin(data.Username,data.Password)
            .then((res)=>{
                 console.log(res)
                if(res.err===0){
                    message.info('登录成功',1,()=>{
                        let token =res.token
                        setItem('user_token',token)
                        this.props.history.replace('/admin/home')
                    })
                }else{
                    message.error('密码错误')
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    })
   }
    render(){
         const {getFieldDecorator} = this.props.form; 
        return(
           <Fragment>
    {/* // const { getFieldDecorator } = this.props.form; */}
            
            <div className="layout">
               
                <Form onSubmit={this.handleSubmit} className="login-form sign_dv">
                    <div className="name_login">
                        <p>客户管理系统</p>
                    </div>
                    <Form.Item className="user_input">
                        {getFieldDecorator('Username',{
                             rules: [{ required: true, message: '密码不能为空' }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"/>
                        )}
                        
                    </Form.Item>
                    <Form.Item className="user_input">
                        {getFieldDecorator('Password',{
                             rules: [{ required: true, message: '密码不能为空' }]
                        })(
                             <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Password"/>
                        )}
                       
                    </Form.Item>
                    <Form.Item className="user_button">
                    <Button type="primary" htmlType="submit" className="login-form-button"
                    onClick={this.login}>
                        登录
                    </Button>
                    </Form.Item>
                </Form>    
            </div>
        </Fragment>
        )
    }
}
export default Form.create({})(withRouter(Login))