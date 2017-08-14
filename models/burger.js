var orm = require ("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res){
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res){
      cb(res);
    });
  },
  update: function(objColVals, description, cb){
    orm.update("burgers", objColVals, description, function(res){
      cb(res);
    });
  },
  delete: function(description, cb){
    orm.delete("burgers", description, function(res){
      cb(res);
    });
  }
};

module.exports = burger;
