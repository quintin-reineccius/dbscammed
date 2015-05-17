var mysql      = require('mysql');
if(process.env.CLEARDB_DATABASE_URL){
	var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
}
else{
	var connection = mysql.createConnection({
	  host     : process.env.DB_HOST,
	  user     : process.env.DB_USER,
	  password : process.env.DB_PASS,
	  database : process.env.DB,
	  port     : process.env.DB_PORT

	});
}

connection.connect();
module.exports = connection