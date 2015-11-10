var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var valoracionComida = new Schema({
    productId: String,
    nombre: String,
    label: Number,
    valoracion: String
})

var rating = new Schema({
    userId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    localId: {
        type: String,
        required: true
    },
    restaurantRating: {
        type: String,
        required: true
    },
    foodRating: [valoracionComida],
    comments: {
        type: String,
        required: true
    },
    creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Rating", rating);