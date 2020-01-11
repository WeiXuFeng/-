import React, { Fragment } from 'react'
import './site.less'
import {Tabs} from 'antd'
import TabOne from './tabOne.js'
import TabTwo from './tabTwo'
import TabThree from './tabThree'
const { TabPane } = Tabs;
function callback(key) {
    
  }
class Site extends React.Component {
  render(){
      return(
          <Fragment>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="网站信息" key="1">
                    <TabOne></TabOne>
                </TabPane>
                <TabPane tab="SEO设置" key="2">
                    <TabTwo></TabTwo>
                </TabPane>
                <TabPane tab="用户注册设置" key="3">
                    <TabThree></TabThree>
                </TabPane>
            </Tabs>
          </Fragment>
      )
  }

}
export default Site



