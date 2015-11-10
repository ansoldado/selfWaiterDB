var RestorationLocal = require("../model/restorationLocal.js");
var Address = require("../model/address.js");
var Waiter = require("../model/waiter.js");

//GET RestorarionLocals
var getAllLocals = function(req, res){
    RestorationLocal.find(function(err, locals){
        if (!err) {
            res.send(locals);
        } else {
            console.log("ERROR getAllLocals: "+ err);
        }
    });
};

//GET RestorarionLocal by Id
var getLocalById = function(req, res){
    RestorationLocal.findById(req.params.id, function(err, local){
        if (!err) {
            res.send(local);
        }else{
            console.log("ERROR getLocalById: " + err);
        }
    });
};

//POST addRestorationLocal
var addRestorationLocal = function(req, res){
    /*var address = new Address({
        road: req.body.address.road,
        roadType: req.body.address.roadType,
        number: req.body.address.number,
        door: req.body.address.door,
        phone: req.body.address.phone,
        mail: req.body.address.mail
    });

    address.save(function(err){
       if(!err){
           console.log("Address guardada: %s .", address._id);
*/
           var local = new RestorationLocal({
               name: req.body.name,
               address: req.body.address,
               type: req.body.type
           });

           local.save(function(err){
               if(!err){
                   console.log("Local Guardado.");
               }else {

                   console.log("ERROR addRestorationLocal: "+ err);
               }
           });
/*
           res.send(local);
       } else{
           console.log("ERROR addRestorationLocal: "+ err);
       }*/
};

//PUT UpdateRestorationLocal
var updateRestorationLocal = function(req, res){

    RestorationLocal.findById(req.params.id, function(err, local){
        var addressId = local.address;
        Address.findById(addressId, function(errAddress, address) {
            address.road =req.body.address.road;
            address.roadType =req.body.address.roadType;
            address.number = req.body.address.number;
            address.door = req.body.address.door;
            address.phone = req.body.address.phone;
            address.mail = req.body.address.mail;

            address.save(function (errAddressSave) {
                if (!errAddressSave) {
                    local.name = req.body.name;
                    local.type = req.body.type;

                    local.save(function (err) {
                        if (!err) {
                            console.log("Local Actualizado.");
                        } else {
                            console.log("ERROR updateRestorationLocal: " + err);
                        }
                    });
                } else {
                    console.log("ERROR updateRestorationLocal: " + err);
                }
            });
        });
        res.send(local);
    });
};

//DELETE RemoveRestorationLocal
var removeRestorationLocal = function(req, res) {
    RestorationLocal.findById(req.params.id, function (err, local) {
        if(!err && local!=null) {
            var addressId = local.address;
            var localId = local._id;
            Waiter.remove({"localId": localId}, function (errWaiter) {
                if (!errWaiter) {
                    Address.findById(addressId, function (errAddress, address) {
                        address.remove(function (errAddressRemove) {
                            if (!errAddressRemove) {
                                local.remove(function (err) {
                                    if (!err) {
                                        console.log("Local Borrado.");
                                        res.send(local);
                                    } else {
                                        console.log("ERROR removeRestorationLocal: " + err);
                                        res.send(null);
                                    }
                                });
                            } else {
                                console.log("ERROR removeRestorationLocal" + err);
                                res.send(null);
                            }
                        });
                    });
                } else {
                    console.log("ERROR removeRestorationLocal: " + err);
                    res.send(null);
                }
            });
        }else{
            console.log("ERROR removeRestorationLocal: " + err);
            res.send(null);
        }
    });
};

module.exports = {
    getAllLocals: getAllLocals,
    getLocalById: getLocalById,
    addRestorationLocal: addRestorationLocal,
    updateRestorationLocal: updateRestorationLocal,
    removeRestorationLocal: removeRestorationLocal

}