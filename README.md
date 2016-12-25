#react的特性：
1只实现了MVC中的V;
2会重建虚拟的DOM树；
3基于单向数据绑定，一旦数据改变，将渲染虚拟DOM;


#react主要API:
1创建元素：React.createElement(arg1,arg2,arg3,arg4...);
arg1:虚拟元素名称或组件名称；
arg2:虚拟DOM元素上必要属性,如id、className等,或者null；
arg3...:该虚拟DOM中所有子元素；
