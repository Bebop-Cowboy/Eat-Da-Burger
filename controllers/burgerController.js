var express = require ("express");

var router = express.Router();

var burgers = require ("../models/burgers.js");

//routes
router.get("/", function (req, res){
  burger.all(function(data){
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res){
  burger.create([
    "name", "juicy"
  ], [
    req.body.name, req.body.sleepy
  ], function(){
    res.redirect("/");
  });
});

router.put(":id", function(req, res){
  var description = "id = " + req.params.id;

  console.log("description", description);

  burger.update({
    juicy: req.body.juicy
  }, description, function(){
    res.redirect("/");
  });
});

router.delete("/:id", function (req, res){
  var description = "id = " + req.params.id;

  burger.delete(description, function(){
    res.redirect("/");
  });
});

module.exports = router;
