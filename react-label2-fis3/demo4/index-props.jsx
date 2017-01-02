//创建状态栏，输出用户名和时间
//创建一个组件
var Title=React.createClass({
//定义渲染子元素方法
getTitle:function(){
console.log(this.props)
return this.props.titleData.map(function(val,index){
//返回虚拟dom，或者数组
return (<li key={index}>{val}</li>)
})
},
//渲染虚拟dom
render: function(){
//打印this，查看能否获取属性数据，在props
console.log(this)
return(
<div className="title">
<ul>
{this.getTitle()}
</ul>
</div>
)}
})

//虚拟dom渲染到页面,传递的是一个字符串
//ReactDOM.render(<Title titleData="北京新闻" />,document.getElementById('app'))

//虚拟dom渲染到页面,传递的是一个数组
ReactDOM.render(<Title titleData={["要闻","北京新闻"]} />,document.getElementById('app'))

//虚拟dom渲染到页面,传递的是一个数组
ReactDOM.render(<Title titleData={["进入话题","今日分享"]}></Title>,document.getElementById('app2'))

