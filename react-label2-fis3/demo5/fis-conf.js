// 解析jsx文件,并修改后缀名
fis.match('**.jsx', {
	//引入插件
	//parser: 'babel2',
	parser: fis.plugin('babel2'),
	//更改后缀名
	rExt: '.js'
});

// 解析嵌入jsx文件
fis.match('**.jsx', {
	//引入插件
	//parser: 'babel2',
	parser: fis.plugin('babel2')
	//更改后缀名
	//rExt: '.js'
});
