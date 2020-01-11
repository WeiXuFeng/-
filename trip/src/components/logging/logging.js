import React ,{Fragment} from "react"
import {withRouter} from 'react-router-dom'
import {Form,Input,Button, message} from 'antd'
import {staffAdd} from './../../api/staff.js'
import {getItem} from './../../utils/webStorage'
class Logging extends React.Component{
    save(){
        let {validateFields} = this.props.form
        validateFields((err,data)=>{
           console.log(data)
           if(err){
               message.err('数据不正确,请重新输入')
           }else{
               let user=data.user;
               let name=data.name;
               let passWord=data.passWord;
               let mail=data.mail;
               let role=data.role;
               let time=new Date(new Date().getTime()).toISOString();
               let token=getItem('user_token');
               console.log(user,name,passWord,mail,role,time,token)
             staffAdd(user,name,passWord,mail,role,time,token)
             .then(data=>{
                 console.log('成功',data)
             })
           }
           
       })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Fragment>
               <Form onSubmit={this.handleSubmit}>
                     <Form.Item label="用户名" hasFeedback>
                        {getFieldDecorator("user")(
                            <Input/>
                    )} 
                    </Form.Item>
                   
                    <Form.Item label="姓名">
                         {getFieldDecorator('name')(
                             <Input/> 
                         )}
                    </Form.Item>
                    <Form.Item label="密码">
                        {getFieldDecorator('passWord')(
                            <Input/>
                        )}
                    </Form.Item>
                    <Form.Item label="邮箱">
                        {getFieldDecorator('mail')(
                            <Input/>
                        )}
                    </Form.Item>
                    <Form.Item label="角色">
                        {getFieldDecorator('role')(
                            <Input/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" onClick={this.save.bind(this)}>保存</Button>
                    </Form.Item>
                </Form>
            </Fragment>
        )
    }
}

export default Form.create({})(withRouter(Logging)) 