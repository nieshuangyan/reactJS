//定义组件
var Uls=React.createClass({
render: function(){
return(<ul><li>玫瑰/月季</li>
{/* hello */}
<li>玫瑰/月季</li><li>玫瑰/月季</li></ul>)}
})

//组件转为虚拟dom,jsx语法转化
var ul=(<Uls />)

//虚拟dom渲染到页面
ReactDOM.render(ul,document.getElementById('app'))
