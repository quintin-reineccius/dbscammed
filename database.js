var pg      = require('pg');
var connection = new pg.Client(process.env.DATABASE_URL)
connection.connect(function(err){
	console.log(err)
})
module.exports = connection