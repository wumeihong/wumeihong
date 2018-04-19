
const Mock = require('mockjs')
const fs = require('fs')
var data = Mock.mock({
	'list|1-10': [{
		'id|+1': 1,
		name: Mock.Random.cname(),  //随机产生一个中文的姓名
		address: Mock.mock('@county(true)'), //随机生成一个地址
		'zip|18-60': 10, //随机生成一个数字 大小在18到60
		date: Mock.Random.date(), //随机生成一个日期
		province: Mock.Random.integer(0, 1),//随机生成一个整数，0/1 ，根据这个来给“男” “女”
		city:Mock.mock('@EMAIL()'), //随机生成一个邮箱
	}]
	
}); 
fs.writeFileSync('./list.json',JSON.stringify(data))