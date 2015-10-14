var User = require("../model/user.js");
var Address = require("../model/address.js");

var getAllUsers = function(req, res){
    User.find().populate("address").exec(function(err, usersWithAddress) {
        if(!err){
           res.send(usersWithAddress);
       } else{
           console.log("ERROR getAllUsers :"+err);
       }
    });
};

var getUserById = function(req, res){
    User.find({"_id": req.params.id}).populate("address").exec(function(err, userWithAddress) {
        if(!err){
                res.send(userWithAddress);
        } else{
            console.log("ERROR getUserById :"+err);
        }
    });
};

var addUser = function(req, res){
    console.log(req.body);
    var address = new Address({
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

            var user = new User({
                name: req.body.name,
                pwd: req.body.pwd,
                address: address._id
            });

            user.save(function(err){
                if(!err){
                    console.log("User guardado");
                }else {
                    address.remove(function(err){
                        if(!err){
                            console.log("Address borrada: %s .", address._id);
                        } else{
                            console.log("ERROR addUser: "+ err);
                        }
                    });
                    console.log("ERROR addUser: "+ err);
                }
            });

            res.send(user);
        } else{
            console.log("ERROR addUser: "+ err);
        }
    });
};

var updateUser = function(req, res){

    User.findById(req.params.id, function(err, user){
        var addressId = user.address;
        Address.findById(addressId, function(errAddress, address) {
            address.road = req.body.address.road;
            address.roadType =req.body.address.roadType;
            address.number = req.body.address.number;
            address.door = req.body.address.door;
            address.phone = req.body.address.phone;
            address.mail = req.body.address.mail;

            address.save(function (errAddressSave) {
                if (!errAddressSave) {
                    user.name = req.body.name;
                    user.pwd = req.body.pwd;

                    user.save(function (err) {
                        if (!err) {
                            console.log("User Actualizado.");
                        } else {
                            console.log("ERROR updateUser: " + err);
                        }
                    });
                } else {
                    console.log("ERROR updateUser: " + err);
                }
            });
        });
        res.send(user);
    });
};

var deleteUser = function(req, res){
    User.findById(req.params.id, function(err, user){
        var addressId = user.address;
        Address.findById(addressId, function(errAddress, address) {

            address.remove(function (errAddressRemove) {
                if (!errAddressRemove) {
                    user.name = req.body.name;
                    user.pwd = req.body.pwd;

                    user.remove(function (err) {
                        if (!err) {
                            console.log("User Borrado.");
                        } else {
                            console.log("ERROR deleteUser: " + err);
                        }
                    });
                } else {
                    console.log("ERROR deleteUser: " + err);
                }
            });
        });
        res.send(user);
    });
};

module.exports = {
    deleteUser: deleteUser,
    addUser: addUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    updateUser: updateUser
}