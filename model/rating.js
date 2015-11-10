var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var valoracionComida = new Schema({
    productId: String,
    nombre: String,
    label: String,
    valoracion: String
})

var rating = new Schema({
    userId: {
        type: String,
    },
    orderId: {
        type: String,
    },
    localId: {
        type: String,
    },
    restaurantRating: {
        type: String,
    },
    foodRating: [valoracionComida],
    comments: {
        type: String,
    },
    creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Rating", rating);