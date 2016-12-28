#demo运行步骤
1安装node.js，https://nodejs.org/en/；

2安装fis3： npm install -g fis3，fis3教程http://fis.baidu.com/fis3/docs/beginning/intro.html；

3安装bable2转换插件，如fis3-parser-babel2、fis3-parser-es6：npm install -g fis3-parser-babel2，解决启动文件fis-conf.js报错类似[ERROR] unable to load plugin [fis3-parser-babel2] or [fis-parser-babel2]；

4cd到项目对应目录，发布项目：fis3 release；

5启动fis3服务器：fis3 server start；

#fis3问题
1Q：fis3执行release后，开启server，但是浏览器打开的是以前写的项目，不是当前项目；

A:命令行执行：fis server open，然后清空打开的文件窗口所有文件；
