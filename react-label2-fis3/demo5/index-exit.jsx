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
}


})

//返回顶部作为侧边栏子组件
//定义侧边栏组件
var Slider=React.createClass({
//定义默认状态
getInitialState:function(){
//console.log('02getInitialState',this,arguments);
return {
title:"分类网址"
};
},
render(){
return(
<div className="slider">
<div>头条新闻</div>
<GoBack title={this.state.title} />
</div>
)
},
//定义滚动事件，定义在组件构建完成的方法中
componentDidMount(){
this.setState({
title:'回到顶部'
});
var me=this;
//为window绑定scroll事件
window.addEventListener("scroll",function(){
//window.scrollY大于500，显示默认定义返回顶部，否则显示分类网址
//console.log('window.scrollY'+window.scrollY)
if(window.scrollY>500){
//console.log("大于500")
//此时this=window，要将组件实例化对象保留
me.setState({
title:"返回顶部"
})
}else{
me.setState({
title:"分类网址"
})
}
})
}
})

//虚拟dom渲染到页面
ReactDOM.render(<Slider />,document.getElementById('app'))


