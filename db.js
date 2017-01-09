var mysql = require('mysql'),
	async = require('async');

var dbName = "";

var state = {
	pool: null,
	mode: null
};

exports.connect = function(mode, done)
{
	state.pool = mysql.createPool({
		host: '',
		user: '',
		password:'',
		database: dbName
	});
	done();
}

exports.get = function()
{
	return state.pool;
}