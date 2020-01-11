import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react'
class Pie extends Component{
  constructor(){
    super()
    this.state={
      option:{
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 30,
            data: ['首页', '列表页', '分类', '用户添加', '用户修改']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '80%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                  {value: 335, name: '首页'},
                  {value: 1548, name: '列表页'},
                  {value: 234, name: '分类'},
                  {value: 135, name: '用户添加'},
                  {value: 310, name: '用户修改'}
                ]
            }
        ]
    }
    }
  }
  componentDidMount(){
    //发起网络请求
    setTimeout(()=>{
      let data=[
        {value: 335, name: '首页'},
        {value: 1548, name: '列表页'},
        {value: 234, name: '分类'},
        {value: 135, name: '用户添加'},
        {value: 310, name: '用户修改'}
      ]
      //注意不能修改元数据，进行深拷贝，否则页面不更新
      let option=JSON.parse(JSON.stringify(this.state.option))
      option.series[0].data=data
      this.setState({option:option},()=>{
        console.log(this.state.option)
      })
    },500)
  }
  render(){
    let {option} =this.state
    return(
      <div title="页面访问占比" style={{width:'600px',height:'320px'}}>
        <ReactEcharts option={option}></ReactEcharts>
      </div>
    )
  }
}
export default Pie