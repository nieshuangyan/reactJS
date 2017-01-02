var Title=React.createClass({
//渲染虚拟dom
render: function(){
return(
<h1>新年快乐</h1>
)}
})

//虚拟dom渲染到页面,传递的是一个字符串
ReactDOM.render(<Title />,document.getElementById('app'))
