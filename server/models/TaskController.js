let Task = require("mongoose").model("Task");

module.exports = {
    all:function(req,res){
        Task.find({},function(err,tasks){
            res.json(tasks);
        })
    },
    show:function(req,res){
        Task.findOne({_id:req.params.ID},function(err,task){
            res.json(person);
        });
    },
    create:function(req,res){
        let task = new Task({title:req.params.title},{description:req.params.description},{completed:req.params.descrption});
        task.save(function(err){
            if(err){
                res.redirect("/");
            }else{
                res.redirect("/");
            }
        });
    },
    update:function(req,res){
        let task = Task.findOne({_id:req.params.ID},function(err,task){
            res.json(task);
        })
        task.title= {title:req.params.title};
        task.description = {description:req.params.description};
        task.completed = {completed:req.params.completed};
        task.save(function(err){
            if(err){
                res.redirect("/");
            }else{
                res.redirect("/");
            }
        });
    },
    destroy:function(req,res){
        Task.remove({_id:req.params.ID},function(err){
            if(err){
                res.redirect("/");
            }else{
                res.redirect("/");
            }
        })
    }
}