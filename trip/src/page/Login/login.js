import React,{Component,Fragment} from 'react'
import {} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import Img from './xinkong4k.jpg'
import './sign.less'
class Login extends Component{
   login=()=>{
       let {getFieldsValue,validateFields} = this.props.form
    //    console.log(getFieldsValue())
    validateFields((err,data)=>{
        if(err){
            message.err('用户输入不正确')
        }else{
            
        }
    })
   }
    render(){
         const {getFieldDecorator} = this.props.form; 
        return(
           <Fragment>
    {/* // const { getFieldDecorator } = this.props.form; */}
            <div className="layout">
            <img src={Img} alt="" className="img" />
                <Form onSubmit={this.handleSubmit} className="login-form sign_dv">
                    <Form.Item>
                        {getFieldDecorator('Username',{
                             rules: [{ required: true, message: '密码不能为空' }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"/>
                        )}
                        
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('Password',{
                             rules: [{ required: true, message: '密码不能为空' }]
                        })(
                             <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Password"/>
                        )}
                       
                    </Form.Item>
                    <Form.Item>
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
export default Form.create({})(Login)