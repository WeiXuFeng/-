import React ,{Fragment} from "react"
import {Form,Input,Button, message} from 'antd'
import {getItem} from './../../utils/webStorage'
import {addClient} from "../../api/colums"

class AdaddCustomerd extends React.Component{
    save(){
        let {validateFields} = this.props.form
        validateFields((err,data)=>{
           console.log(data)
           if(err){
               message.err('数据不正确,请重新输入')
           }else{
               let name=data.name;
               let iphone=data.iphone;
               let Source=data.Source;
               let MessageTime=new Date().toLocaleString()
               let type=data.type;
               let remark=data.remark;

               addClient(name,iphone,Source,MessageTime,type,remark).then((data)=>{
                console.log(data)
               })
               
           }
           
       })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Fragment>
               <Form onSubmit={this.handleSubmit}>
                     <Form.Item label="客户名称" hasFeedback>
                        {getFieldDecorator("name")(
                            <Input/>
                    )} 
                    </Form.Item>
                   
                    <Form.Item label="客户电话">
                         {getFieldDecorator('iphone')(
                             <Input/> 
                         )}
                    </Form.Item>
                    <Form.Item label="来源平台">
                        {getFieldDecorator('Source')(
                            <Input/>
                        )}
                    </Form.Item>
                    <Form.Item label="咨询的产品种类">
                        {getFieldDecorator('type')(
                            <Input/>
                        )}
                    </Form.Item>
                    <Form.Item label="备注">
                        {getFieldDecorator('remark')(
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

export default Form.create({})(AdaddCustomerd)