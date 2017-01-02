#react的特性：

1只实现了MVC中的V;

2会重建虚拟的DOM树；

3基于单向数据绑定，一旦数据改变，将渲染虚拟DOM;


#react主要API:
1创建虚拟dom：React.createElement(arg1,arg2,arg3,arg4...)

arg1:虚拟元素名称或组件名称；

arg2:虚拟DOM元素上必要属性,如id、className等,或者null；

arg3...:该虚拟DOM中所有子元素；
eg:var MessageBox=React.createElement('h1',{
        title:'这是一个标题'
        },'您好！'
      );


2创建一个组件：React.createClass(arg1)
arg1:构建之组件的对象；

eg:var Header=React.createClass({
render: function(){
var username='yanz燕子';
var date=new Date();
return(
<div className="header">
<div className="inner>
<span>{username}</span>
{/* 渲染时间 */}
<span>{date.getHours()>12? '下午好':'上午好'}</span>
</div>
</div>
)}
})

3将虚拟DOM渲染到页面：ReactDOM.render(nextElement, container, callback)

nextElement:虚拟DOM名称；

container:真实DOM容器；

callback:回调函数；


#react相关
1jsx语法：

1.1{}里面可以写大量表达式，如{var a="11";}；

1.2jsx注释：{/* 注释 */}，注释不能写在render中return语句前面，否则报错Adjacent JSX elements must be wrapped in an enclosing tag (12:0)；

1.3jsx中在render中return中返回的html元素：只能返回一个根元素，其余元素为根元素的子元素，否则报错Adjacent JSX elements must be wrapped in an enclosing tag (10:0)；

#react的Demo介绍
1demo0:简单的react实现，了解react,类似hello world;

1demo1:简单的react+label2+fis3+jsx实现，了解react和jsx;

2demo2:介绍react表达式{}，在jsx语法中表达式{}里面写任何表达式，如定义变量等；
