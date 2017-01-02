//ES6创建返回定义按钮组件
//返回顶部作为侧边栏子组件
var GoBack=React.createClass({
//第一阶段获取默认属性
getDefaultProps(){
console.log('01getDefaultProps',this,arguments);
return {
title:'默认标题'
};
},

//第二阶段，设置默认状态
getInitialState:function(){
console.log('02getInitialState',this,arguments);
return {
//用属性设置状态
title:this.props.title
};
},

//第三阶段，将要构建组件
componentWillMount(){
console.log('03componentWillMount',this,arguments);
console.log();
},

//第四个阶段，输出虚拟dom树
render(){
//console.log(this)
//console.log('04render',this,arguments);
return(
<div className="go-back" onClick={this.goTop}>{this.state.title}</div>
)},
//第五个阶段，组件构建完成
componentDidMount(){
console.log('05componentDidMount',this,arguments);
},
//定义返回顶部方法
goTop(){
console.log("goTop");
//滚动条设置到顶部
window.scrollTo(0,0);

},


//存在期
//第一个阶段，组件将要接受属性，新的属性
componentWillReceiveProps(nextProps){
console.log('存在期01componentWillReceiveProps',this,arguments);
},
//第二个阶段，组件是否应该更新，新的属性和新的状态，必须有返回值
shouldComponentUpdate(nextProps,nextState){
console.log('存在期02shouldComponentUpdate',this,arguments);
return true;//继续执行，false不执行下面阶段
},
//第三个阶段，组件将要更新，新的属性和新的状态
componentWillUpdate(nextProps,nextState){
console.log('存在期03componentWillUpdate',this,arguments);
},
//第四个阶段，渲染输出组件，render()已经被定义

//第五个阶段，组件将要接受属性，上一个的属性和新的状态
componentDidUpdate(nextProps,prevState){
console.log('存在期05componentDidUpdate',this,arguments);
},



//销毁期
componentWillUnmount(nextProps,prevState){
console.log('销毁期componentWillUnmount',this,arguments);
}

})


//虚拟dom渲染到页面
ReactDOM.render(<GoBack />,document.getElementById('app'))
//过5秒删除组件
setTimeout(function(){
ReactDOM.render(<div />,document.getElementById('app'))
},5000)
