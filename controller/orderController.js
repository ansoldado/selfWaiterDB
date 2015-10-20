var Order = require("../model/order.js");

//GET All Orders
var getAllOrders = function(req, res){
    Order.find().populate("products.productId").exec(function(err, orders){
        if (!err) {
            res.send(orders);
        } else {
            console.log("ERROR getAllOrders: "+ err);
        }
    });
};

//GET Order by Id
var getOrderById = function(req, res){
    Order.find({"_id": req.params.id}).populate("products.productId").exec(function(err, order){
        if (!err) {
            res.send(order);
        }else{
            console.log("ERROR getOrderById: " + err);
        }
    });
};

var getOrderByTable = function(req, res){
    Order.find({'tableId': req.params.tableId, 'status': 'Activo'}).populate("products.productId").exec(function(err, order){
        if(!err){
            res.send(order)
        }else{
            console.log("ERROR getOrderByTable" + err);
            res.send(null);
        }
    });
};

//POST Add Order
var addOrder = function(req, res){
    var order = new Order({
        localID: req.body.localID,
        waiter: req.body.waiter,
        products: req.body.products,
        tableId: req.body.tableId
    });

    order.save(function(err){
        if(!err){
            console.log("Order Guardado.");
        }else {
            console.log("ERROR addOrder: "+ err);
        }
    });

    res.send(order);
};

//PUT UpdateOrder
var updateOrder = function(req, res){
    Order.findById(req.params.id, function(err, order){
        order.localID: req.body.localID;
        order.waiter: req.body.waiter;
        order.products: req.body.products;
        order.tableId: req.body.tableId


        order.save(function(err){
            if(!err){
                console.log("Order Actualizado.");
            }else {
                console.log("ERROR updateOrder: "+ err);
            }
        });

        res.send(order);
    });
};

//DELETE Remove Order
var removeOrder = function(req, res){
    Order.findById(req.params.id, function(err, order){
        order.remove(function(err){
            if(!err){
                console.log("Order Borrado.");
            }else {
                console.log("ERROR removeOrder: "+ err);
            }
        });
        res.send(order);
    });
};

module.exports = {
    getAllOrders: getAllOrders,
    getOrderById: getOrderById,
    getOrderByTable: getOrderByTable,
    addOrder: addOrder,
    updateOrder: updateOrder,
    removeOrder: removeOrder

}