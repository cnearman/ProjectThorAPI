// app/index.js
var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Project Thor API');
})

app.get('/timings', function(req, res){
	res.send(req);
})

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("example listening on http://%s:%s", host ,port);
})