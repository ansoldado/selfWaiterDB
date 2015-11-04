var RestorationLocal = require("../model/restorationLocal.js");
var User = require("../model/user.js");
var Waiter = require("../model/waiter.js");

var getAllWaiters = function(req, res){
    Waiter.find().populate("user").populate("localId").exec(function(err, waiters){
      if(!err){
          res.send(waiters);
      }else{
          console.log("ERROR getAllWaiters: "+err);
      }
    });
};

var getWaiterById = function(req, res){
    Waiter.findById(req.params.id, function(err, waiter){
        if(!err){
            res.send(waiter);
        }else{
            console.log("ERROR getWaiterById: "+err);
        }
    });
};

var addWaiter = function(req, res){
    var waiter = new Waiter({
        user: req.body.user,
        localId: req.body.localId
    });

    waiter.save(function(err){
       if(!err){
           console.log("Waiter guardado");
       } else{
           console.log("ERROR addWaiter: "+err);
       }
    });
    res.send(waiter);
};


var removeWaiter = function(req, res){
    Waiter.findById(req.params.id, function(err, waiter){
        if(!err){
            waiter.remove(function(err){
                if(!err){
                    console.log("Waiter eliminado.");
                }else{
                    console.log("ERROR removeWaiter: "+err);
                }
            });
        }else{
            console.log("ERROR removeWaiter: "+err);
        }
        res.send(waiter);
    });
};

module.exports = {
    getAllWaiters: getAllWaiters,
    addWaiter: addWaiter,
    removeWaiter: removeWaiter,
    getWaiterById: getWaiterById
};