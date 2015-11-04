var Rating = require("../model/rating.js");

//GET All Ratings
var getAllRatings = function(req, res){
    Rating.find().populate("restaurantRating").exec(function(err, ratings){
        if (!err) {
            res.send(ratings);
        } else {
            console.log("ERROR getAllRatings: "+ err);
        }
    });
};

//GET Rating by Id
var getRatingById = function(req, res){
    Rating.findById(req.params.id, function(err, ratings){
        if (!err) {
            res.send(ratings);
        }else{
            console.log("ERROR getRatingById: " + err);
        }
    });
};

//GET All Rating for an user
var getRatingsByUserId = function(req, res){
    Rating.find({"userId": req.params.userId}, function(err, rating){
        if(!err){
            res.send(rating);
        }else{
            console.log("ERROR getRatingsByUserId: " + err);
        }
    });
}

//GET All Rating for an local
var getRatingsByLocalId = function(req, res){
    Rating.find({"localId": req.params.localId}, function(err, rating){
        if(!err){
            res.send(rating);
        }else{
            console.log("ERROR getRatingsByLocalId: " + err);
        }
    });
}

//GET All Rating for an order
var getRatingsByOrderId = function(req, res){
    Rating.find({"orderId": req.params.orderId}, function(err, rating){
        if(!err){
            res.send(rating);
        }else{
            console.log("ERROR getRatingsByOrderId: " + err);
        }
    });
}

//POST Add Rating
var addRating = function(req, res){
    var rating = new Rating({
        userId:req.body.userId,
        orderId:req.body.orderId,
        localId: req.body.localId,
        restaurantRating: req.body.restaurantRating,
        foodRating: req.body.foodRating,
        comments: req.body.comments
    });

    rating.save(function(err){
        if(!err){
            console.log("Rating Guardado.");
        }else {
            console.log("ERROR addRating: "+ err);
        }
    });

    res.send(rating);
}

//PUT updateRating
var updateRating = function(req, res){
    Rating.findById(req.params.id, function(err, rating){
        rating.userId:req.body.userId,
        rating.orderId:req.body.orderId,
        rating.localId: req.body.localId,
        rating.restaurantRating: req.body.restaurantRating,
        rating.foodRating: req.body.foodRating,
        rating.comments: req.body.comments


        rating.save(function(err){
            if(!err){
                console.log("Rating Actualizado.");
            }else {
                console.log("ERROR updateRating: "+ err);
            }
        });

        res.send(rating);
    });
};

//DELETE Remove Rating
var removeRating = function(req, res){
    Rating.findById(req.params.id, function(err, rating){
        rating.remove(function(err){
            if(!err){
                console.log("Rating Borrado.");
            }else {
                console.log("ERROR removeRating: "+ err);
            }
        });
        res.send(rating);
    });
};

module.exports = {
    getAllRatings: getAllRatings,
    getRatingById: getRatingById,
    getRatingsByUserId: getRatingsByUserId,
    getRatingsByLocalId: getRatingsByLocalId,
    getRatingsByOrderId: getRatingsByOrderId,
    addRating: addRating,
    updateRating: updateRating,
    removeRating: removeRating
}