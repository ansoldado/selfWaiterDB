var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var RestorationLocal = require("./restorationLocal.js");

var product = new Schema({
    name: {
        type: String
    },
    category: {
        type: String,
        enum: ["Bebida", "Postres", "Entrantes", "Plato", "Bocadillo"]
    },
    price: {
        type: Number
    },
    localId: {
        type: Schema.ObjectId, ref: "RestorationLocal",
        required: true
    }
});

module.exports = mongoose.model("Product", product);