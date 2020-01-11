import React,{Component} from 'react'
import {Input,Form} from 'antd'
import './site.less'
class TabOne extends Component{
    render(){
        return(
            <div className="one">
                禁止修改
                <Form>
                    <Form.Item label="网站名称" hasFeedback>
                        <Input value="用户管理系统" />
                    </Form.Item>
                    <Form.Item label="ICP备">
                        <Input  value="豫ICP备18011207号" />
                    </Form.Item><Form.Item label="公安备">
                        <Input value="暂无" />
                    </Form.Item><Form.Item label="站长邮箱">
                        <Input value="HS106527@163.com" />
                    </Form.Item>
                    <Form.Item label="统计代码">
                        <Input value="暂无" />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}


export default TabOne