//sql connection
var mysql = require ("mysql");

var connection = mysql.createConnection ({
  port: 3306,
  host: "localhost",
  user: "root",
  passwork: "",
  database: "burger_db"
});

//connection
connection.connect(function(err){
  if(err){
    console.error("error connencting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//ORM connection
module.exports = connection;
