var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:"123456",
	database:'baby'
})


/* GET home page. */

// 删除
router.post('/list', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
		
				
			
				var name=req.body.name
				var message=req.body.message

				pool.query("INSERT INTO user (name,message) VALUES ('"+name+"','"+message+"')",function(e,rows,fields){
		
				res.send(rows)
		
	}) 
		
});

// 查询
router.post('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
		
				pool.query('SELECT * FROM user',function(e,rows,fields){
				
				res.send(rows)
		
	}) 
		
});


// 删除
router.post('/del', function(req, res, next) {
  	res.header('Access-Control-Allow-Origin','*')
	
	var id=req.body.b
	console.log(id)

	pool.query('DELETE FROM user WHERE id='+id,function(e,rows,fields){
		
		
		res.send(rows)
		console.log(rows)
	})
});

module.exports = router;
