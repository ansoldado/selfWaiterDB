var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var Order = require("./order.js");
var User = require("./user.js");
var restorationLocal = require("./restorationLocal.js");


var rating = new Schema({
    userId: {
        type: Schema.ObjectId, ref: "User",
        required: true
    },
    orderId: {
        type: Schema.ObjectId, ref: "Order",
        required: true
    },
    localId: {
        type: Schema.ObjectId, ref: "restorationLocal",
        required: true
    },
    restaurantRating: String,
    foodRating: String,
    comments: String,
    creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Rating", rating);