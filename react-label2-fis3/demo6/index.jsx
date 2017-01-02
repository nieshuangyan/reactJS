//创建状态栏，输出用户名和时间
//创建一个淘宝搜索组件
var Search=React.createClass({
goSearch(e){
//这里事件对象只能获取span元素，但是要获取input元素
//通过rel属性获取input元素
var inp=this.refs.searchInput;
console.log(inp.value)
},
//渲染输出虚拟dom
render: function(){
var content={
__html:'<span style="color:red;display:inline-block;width:40px;">高级搜索</span>'
};
return(
<div className="search">
{/*点击搜索按钮要获取input的值，要绑定rel属性*/}
<input ref='searchInput' type="text" />
<span className='search-btn' onClick={this.goSearch}>搜索</span>
<span dangerouslySetInnerHTML={content}></span>
</div>
)}
})

//虚拟dom渲染到页面
ReactDOM.render(<Search />,document.getElementById('app'))
