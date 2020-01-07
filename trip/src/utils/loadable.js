import React from 'react'
import Loadable from 'react-loadable';

export default (loader)=>{
function Loading(){
    return (<h1>这里是过度组件</h1>)
}
const LoadableComponent = Loadable({

  loader: loader,
  loading: Loading,
});
 
  return ()=>{
    return ( <LoadableComponent/>);
    
}
}