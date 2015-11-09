var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var Order = require("./order.js");
var User = require("./user.js");
var restorationLocal = require("./restorationLocal.js");


var rating = new Schema({
    userId: {
        type: String
    },
    orderId: {
        type: String
    },
    localId: {
        type: String
    },
    restaurantRating: {
        type: String
    },
    foodRating: {
        type: String
    },
    comments: {
        type: String
    },
    creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Rating", rating);