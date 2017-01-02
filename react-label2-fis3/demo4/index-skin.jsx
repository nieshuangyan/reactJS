var Skin=React.createClass({
//changeNav:function(e){
//console.log(this);
//console.log(arguments);
//改变num的值，通过setState更改状态
//获取num，this.state.num
//this.setState({
//num:this.state.num+1
//})

//},
//定义默认state
//getInitialState:function(){
//return {
//num:0
//};
//},
createImageLi:function(){
var result=[];
for(var i=1;i<13;i++){
result.push(
<li key={i}>
<img src={'skin/'+(i<10? '0'+i:i)+'.jpg'} style={{width:'178px',height:'98px'}} alt='' />
</li>
)
}
return result;
},
//定义render()渲染虚拟dom
render: function(){
console.log(this);
return(
<div className="containner">
<div className="bg"></div>
<div className="img-container">
<ul>
{this.createImageLi()}
</ul>
</div>
</div>
)}
})

//虚拟dom渲染到页面,传递的是一个字符串
ReactDOM.render(<Skin />,document.getElementById('app'))
