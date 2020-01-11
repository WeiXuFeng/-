import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Form,Input,Button} from 'antd'
class TabTwo extends Component{
    SEOsove(){
        let {getFieldDecorator,getFieldsValue} = this.props.form
       console.log(getFieldsValue())
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="two">
                <Form onSubmit={this.handleSubmit}>
                     <Form.Item label="SEO标题" hasFeedback>
                        {getFieldDecorator("SEObiaoti")(
                            <Input/>
                    )} 
                    </Form.Item>
                   
                    <Form.Item label="SEO框架">
                         {getFieldDecorator('SEOkuangjia')(
                             <Input/> 
                         )}
                    </Form.Item>
                    <Form.Item label="SEO描述">
                        {getFieldDecorator('SEOmiaoshu')(
                            <Input/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" onClick={this.SEOsove.bind(this)}>保存</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}


export default Form.create({})(withRouter(TabTwo))