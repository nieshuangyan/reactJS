#react的特性：

1只实现了MVC中的V;

2会重建虚拟的DOM树；

3基于单向数据绑定，一旦数据改变，将渲染虚拟DOM;


#react主要API:
1创建虚拟dom：React.createElement(arg1,arg2,arg3,arg4...)

arg1:虚拟元素名称或组件名称；

arg2:虚拟DOM元素上必要属性,如id、className等,或者null；

arg3...:该虚拟DOM中所有子元素；

eg:var MessageBox=React.createElement('h1',{ title:'这是一个标题' },'您好！');

2创建一个组件：React.createClass(arg1)
arg1:构建之组件的对象；


3将虚拟DOM渲染到页面：ReactDOM.render(nextElement, container, callback)

nextElement:虚拟DOM名称；

container:真实DOM容器；

callback:回调函数；

eg:渲染虚拟dom树：ReactDOM.render(MessageBox,document.getElementById('app')

4组件内部两个重要变量(属性)：this.props、this.state

4.1this.props主要存放组件的属性：ReactDOM.render(《Title titleData={["要闻","北京新闻"]} /》,document.getElementById('app'))，获取titleData属性this.props.titleData；

props是在创建组件时候传递属性值不同而决定，以后通常改不了(除了子组件)；

设置组件默认属性方法getDefaultProps：getDefaultProps:function(){return {num:0};}

4.2this.state变量主要存放标志状态，区分"无状态组件"和"有状态组件"；

state是在产生交互时候改变的，他的改变伴随着交互(组件中的通信)，交互通常由事件触发；

设置组件默认状态方法getIntialState：getInitialState:function(){console.log(this.props.num)return {num:this.props.num};}

改变状态的方法setState：this.setState({num:this.state.num+1})，通常在事件中改变state

4.3每次props、state改变都会执行一次render()重新渲染组件，组件是否更改由虚拟dom有没有改变决定，将改变位置重新构建虚拟dom；

5根据虚拟dom获取真实dom元素：ReactDOM.findDOMNode(this)

#react相关

1jsx语法：

1.1{}里面可以写大量表达式，如{var a="11";}，在插值符号中可以输入任何表达式，如js内置方法，js语句；

1.2jsx注释：{/* 注释 */}，注释不能写在render中return语句前面，否则报错Adjacent JSX elements must be wrapped in an enclosing tag (12:0)；

1.3jsx中在render中return中返回的html元素：只能返回一个根元素，其余元素为根元素的子元素，否则报错Adjacent JSX elements must be wrapped in an enclosing tag (10:0)；

1.4虚拟dom定义样式style：style的值只能是对象，不能为style添加字符串

font-size这类多单词属性要用驼峰式命名，font-size写成fontSize；

有css3前缀属性，第一个字母要大写，box-shadow写成WebkitBoxShadow；

无论在定义组件中还是定义虚拟dom中使用样式对象，《h1 style={{color:'red',fontSize:'12px'}}》或者《h1 style={style1}》

1.5jsx语法特点：

元素中的class属性要写成className；

for要写成htmlFor；

html嵌入jsx，script标签中type="text/x-jsx"，《script type="text/x-jsx"》《/script》；

2组件：

2.1组件分类："无状态组件"和"有状态组件"

"无状态组件"：创建并渲染到页面中后不更改，在创建时候添加需要属性完成样式控制即可，不会与用户交互或者发送异步请求；

"有状态组件"：创建后根据用户不同交互产生不同样式，不同内容；

2.2组件的生命周期：创建期、存在期、销毁期

创建期：组件创建；

存在期：组件已创建，内部状态属性发生改变时候；

销毁期：组件从页面中删除；

2.3创建期五个阶段：

第一阶段：获取默认属性getDefaultProps，组件没有创建；

第二阶段：获取默认状态getInitialState，组件内部数据已创建，可以获取属性值传递给状态，在组件外部只能为组件添加属性数据而不能添加状态数据；

第三阶段：组件将要被构建componentWillMount，组件虚拟dom，可以处理状态数据以及属性数据；

第四阶段：组件渲染输出虚拟dom  render，一定要通过return返回(在一个根元素下面虚拟dom)；

第五阶段：组件已经构建完成componentDidMount，组件创建完虚拟dom可以操作dom元素，可以操作组件属性和状态；

注：五个阶段所有方法参数是空，除了第一个阶段方法作用域是构造函数，其他作用域是组件实例化对象；

2.4存在期五个阶段：组件内部属性状态发生变化会进入存在期

第一阶段：组件将要接受新的属性componentWillReceiveProps(nextProps)，新属性，在组件内部更新状态时候不会触发此方法，只有属性改变才会执行；

第二阶段：组件是否应该更新shouldComponentUpdate(nextProps,nextState)，一定要有返回值，属性状态改变没必要更新，return false即可，后面方法不执行；

第三阶段：组件将要被更新componentWillUpdate(nextProps,nextState)，不能继续更改状态属性；

第四阶段：组件更新输出虚拟dom，Render()，必须返回新的虚拟dom；

第五阶段：组件已经更新完成componentDidUpdate(prevProps,prevState)，上一个属性状态，可以访问新的属性状态；

注：所有时期作用域是组件实例化对象；

2.5销毁期：组件从页面中删除时候，即组件即将被销毁componentWillUnmount()，作用域是组件实例化对象；

2.6子组件：组件中添加的其他组件，父组件可以向子组件属性传递属性和状态，《Nav》《Title>《/Title》《/Nav》

传递属性《Title data={this.props.data} /》，通常只能传递一次，除非父组件也作为子组件发生属性改变；

状态属性《Title data={this.props.state} /》，父组件状态改变子组件属性改变，触发子组件进入存在期；

自定义数据《Title data="ha" /》，data属性永远无法改变；

3事件：react定义事件与html为元素绑定事件一样，on+事件名称，通常在组件内部定义事件，通过this添加事件回调函数；

eg:var Title=React.createClass({

changeNav:function(e){

this.setState({

num:this.state.num+1})},

render: function(){

return(

《span onClick={this.changeNav}》换一换《/span》)}})

ReactDOM.render(《Title /》,document.getElementById('app'))

4非元素属性：

4.1key：属性key为元素设置绑定reactid，不然报错react.js:20481 Warning: Each child in an array or iterator should have a unique "key" prop。eg:return data.map(function(val,index){return (《li key={index}》{val}《/li》)})；

4.2Rel：对虚拟dom的一个引用，在组件方法中可根据这个属性快速获取组件中元素，《input ref='searchInput' type="text" /》；

this.refs.refName：获取非选择元素的内容，this.refs.searchInput.value；

4.3dangerouslySetInnerHTML:对虚拟dom设置内容值(html代码、内联样式)，必须是一个对象，__html(双下划线html)表示内容值；

var content={__html:'《span style="color:red;display:inline-block;width:40px;"》高级搜索《/span》'};

《span dangerouslySetInnerHTML={content}》NO SPACE OR TEXT HERE《/span》

#react的Demo介绍
1demo0:简单的react实现，了解react,类似hello world;

1demo1:简单的，了解react和jsx，react+label2+fis3+jsx实现解析.jsx文件；

2demo2:介绍react表达式{}，在jsx语法中表达式{}里面写任何表达式，如定义变量等，react+label2+fis3+jsx实现解析.jsx文件；

3demo3:自定义组件函数渲染列表，react+label2+fis3+jsx实现解析.jsx文件；
