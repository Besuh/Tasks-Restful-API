let mongoose = require("mongoose");
let TaskController = require("../controllers/TaskController.js");

module.exports = function(app){
    app.get("/",function(req,res){
        TaskController.all(req,res);
    });
    app.get("/:ID",function(req,res){
        TaskController.show(req,res);
    });
    app.get("/new/:title/:description/:completed",function(req,res){
        TaskController.create(req,res);
    });
    app.get("/update/:ID/:title/:description/:completed",function(req,res){
        TaskController.update(req,res);
    })
    app.get("/remove/:ID",function(req,res){
        TaskController.destroy(req,res);
    });
}