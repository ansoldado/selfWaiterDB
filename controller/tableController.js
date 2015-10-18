var Waiter = require("../model/waiter");
var RestorationLocal = require("../model/restorationLocal");
var Table = require("../model/table");

var getAllTables = function (req, res){
    Table.find(function(err, tables){
        if(!err){
            res.send(tables);
        }else{
            console.log("ERROR getAllTables: "+err);
            res.send(null);
        }
    });
};

var getTableById = function (req, res){
    Table.findById(req.params.id, function(err, table){
        if(!err){
            res.send(table);
        } else{
            console.log("ERROR getTableById: "+err);
            res.send(null);
        }
    });
};

var getTablesByWaiter = function(req, res){
    Table.find({"waiterId": req.params.waiterId}, function (err, tables){
        if(!err){
            res.send(tables);
        }else{
            console.log("ERROR getTablesByWaiter" + err);
        }
    });
};

var addTable = function (req, res){
    var table = new Table({
        localId: req.body.localId,
        waiterId: req.body.waiterId,
        qrString: req.body.qrString
    });

    table.save(function(errSaveTable){
        if(!errSaveTable){
            res.send(table);
        } else{
            console.log("ERROR addTable: "+errSaveTable);
            res.send(null);
        }
    });
};

var removeTable = function (req, res){
    Table.findById(req.params.id, function(err, table){
        if(!err){
            table.remove(function(errRemoveTable){
                if(!errRemoveTable){
                    res.send(table);
                } else{
                    console.log("ERROR removeTable: "+errRemoveTable);
                    res.send(null);
                }
            });
        } else{
            console.log("ERROR removeTable: "+err);
            res.send(null);
        }
    });
};

var updateTable = function (req, res){
    Table.findById(req.params.id, function(err, table){
        if(!err){
            table.localId = req.body.localId;
            table.waiterId = req.body.waiterId;
            table.qrString = req.body.qrString;
            table.orderId = req.body.orderId;

            table.save(function(errSaveTable){
                if(!errSaveTable){
                    res.send(table);
                } else{
                    console.log("ERROR updateTable: "+errSaveTable);
                    res.send(null);
                }
            });
        } else{
            console.log("ERROR updateTable: "+err);
            res.send(null);
        }
    });
};

module.exports = {
    getAllTables: getAllTables,
    getTableById: getTableById,
    getTablesByWaiter: getTablesByWaiter,
    addTable: addTable,
    removeTable: removeTable,
    updateTable: updateTable
};