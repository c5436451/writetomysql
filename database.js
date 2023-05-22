const mysql = require('mysql2');
const connection = mysql.createConnection({
	host : 'database-1.c2uyo8monlyc.us-east-1.rds.amazonaws.com',
	database : 'customer',
	user : 'admin',
	password : 'password'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;