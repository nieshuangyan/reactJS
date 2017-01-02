var Title=React.createClass({
changeNav:function(e){
//console.log(this);
//console.log(arguments);
//改变num的值，通过setState更改状态
//获取num，this.state.num
this.setState({
num:this.state.num+1
})

},
//定义默认属性
getDefaultProps:function(){
return {
num:0
};
},
//定义默认state
getInitialState:function(){
//将属性数据给状态
console.log(this.props.num)
return {
num:this.props.num
};
},
//定义render()渲染虚拟dom
render: function(){
//console.log(this)
//在getInitialState中定义的num可通过this.state访问
return(
<div className="nav">
<ul>
<li style={{
display:this.state.num%3===0? 'block':'none'
}}>
<a href="">哈哈哈1</a>
<a href="">好好好1</a>
</li>
<li style={{
display:this.state.num%3===1? 'block':'none'
}}>
<a href="">哈哈哈2</a>
<a href="">好好好2</a>
</li>
<li style={{
display:this.state.num%3===2? 'block':'none'
}}>
<a href="">哈哈哈3</a>
<a href="">好好好3</a>
</li>
</ul>
<span onClick={this.changeNav}>换一换</span>
</div>
)}
})

//虚拟dom渲染到页面,传递的是一个字符串
//ReactDOM.render(<Title />,document.getElementById('app'))

ReactDOM.render(<Title num='1' />,document.getElementById('app'))
ReactDOM.render(<Title num='2' />,document.getElementById('app2'))
