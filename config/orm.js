//import sql connection
var connection = require ("../config/connection.js");

//helper function for sql syntax
function printQuestionMarks(num){
  var arr = [];

  for (var i = 0; i < num; i++){
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for(var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err,result){
      if(err){
        throw err;
      }
      cb(result);
    });
  },
  create: function (table, cols, val, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks (vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result){
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function (table, objColVals, description, cb){
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += description;

    console.log(queryString);
    connection.query(queryString, function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    });
  },
  delete: function (table, description, cb){
    var queryString  = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += description;

    connection.query (queryString, function (err, result){
      if(err){
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
