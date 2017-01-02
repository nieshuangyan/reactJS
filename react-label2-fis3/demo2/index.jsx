//创建状态栏，输出用户名和时间
//创建一个组件
var Header=React.createClass({
render: function(){
var username='yanz燕子';
var date=new Date();
return(
<div>
<div><span>{username}</span>
<span>{date.getHours()>12? '下午好':'上午好'}</span></div>
</div>
)}
})

//虚拟dom渲染到页面
ReactDOM.render(<Header />,document.getElementById('app'))
