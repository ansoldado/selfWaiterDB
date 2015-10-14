var Product = require("../model/product");
var RestorationLocal = require("../model/restorationLocal");

var getAllProducts = function (req, res){
    Product.find(function(err, products){
        if(!err){
            res.send(products);
        }else{
            console.log("ERROR getAllProducts: "+err);
            res.send(null);
        }
    });
};

var getProductById = function (req, res){
    Product.findById(req.params.id, function(err, product){
        if(!err){
            res.send(product);
        } else{
            console.log("ERROR getProductById: "+err);
            res.send(null);
        }
    });
};

var addProduct = function (req, res){
    var product = new Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity,
        localId: req.body.localId
    });

    product.save(function(err){
        if(!err){
            res.send(product);
        } else{
            console.log("ERROR addProduct: "+err);
            res.send(null);
        }
    });
};

var removeProduct = function (req, res){
    Product.findById(req.params.id, function(err, product){
        if(!err){
            product.remove(function(errRemoveProduct){
                if(!errRemoveProduct){
                    res.send(product);
                } else{
                    console.log("ERROR removeProduct: "+errRemoveProduct);
                    res.send(null);
                }
            });
        } else{
            console.log("ERROR removeProduct: "+err);
            res.send(null);
        }
    });
};

var updateProduct = function (req, res){
    Product.findById(req.params.id, function(err, product){
        if(!err){
            product.name = req.body.name;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
            product.localId = req.body.localId;
            product.save(function(errSaveProduct){
                if(!errSaveProduct){
                    res.send(product);
                } else{
                    console.log("ERROR updateProduct: "+errSaveProduct);
                    res.send(null);
                }
            });
        } else{
            console.log("ERROR updateProduct: "+err);
            res.send(null);
        }
    });
};

module.exports = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    addProduct: addProduct,
    removeProduct: removeProduct,
    updateProduct: updateProduct
};