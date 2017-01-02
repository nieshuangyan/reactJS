//创建状态栏，输出用户名和时间
//创建一个组件
var List=React.createClass({
createLis:function(){
var data="ECMAScript6简介 let和const命令 变量的解构赋值 字符串的扩展 正则的扩展 数值的扩展 数组的扩展".split(" ")
return data.map(function(val,index){
return (<li key={index}>{val}</li>)
})
},
render: function(){
console.log(this)
return(
<ul>{this.createLis()}
</ul>
)}
})

//虚拟dom渲染到页面
ReactDOM.render(<List />,document.getElementById('app'))
