//ES6创建返回定义按钮组件
//创建一个组件,组件构建完成把字体颜色设置绿色，点击组件改变组件内容，最后一个阶段
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
console.log('04render',this,arguments);
return(
<div className="go-back" onClick={this.goTop}>{this.state.title}</div>
)},
//第五个阶段，组件构建完成
componentDidMount(){
console.log('05componentDidMount',this,arguments);

//更改内容
//this.setState({
//title:'回到顶部'
//});

//更改字体颜色
ReactDOM.findDOMNode(this).style.color='red';
console.log(ReactDOM.findDOMNode(this));
},
//定义返回顶部方法
goTop(){
console.log("goTop");
//滚动条设置到顶部
window.scrollTo(0,0);

//更改内容
this.setState({
title:'回到顶部'
});
}
})

//虚拟dom渲染到页面
ReactDOM.render(<GoBack />,document.getElementById('app'))
