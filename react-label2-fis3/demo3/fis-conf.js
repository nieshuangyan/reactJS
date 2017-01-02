// 解析jsx,并修改后缀名
fis.match('**.jsx', {
	//引入插件
	parser: 'babel2',
	//更改后缀名
	rExt: '.js'
})
