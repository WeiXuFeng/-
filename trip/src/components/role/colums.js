const colums=[
    {
        title: '角色名称',
        dataIndex: 'name',
        key:"name",
      },
      {
        title: '角色描述',
        dataIndex: 'des',
        key:"des",
      },
      {
        title: '状态',
        dataIndex: 'state',
        key:"state",

      },
      {
        title: '操作',
        dataIndex: 'active',
        key:"active",
        render(){
           return (
               <div>
                   <Button>权限设置</Button>
                   <Button>权限设置</Button>
                   <Button>权限设置</Button>

               </div>

)
      }
    }
]

export default colums