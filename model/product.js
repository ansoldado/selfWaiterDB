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
    quantity: {
        type: Number
    },
    available: {
        type: Boolean,
        default: true
    },
    localId: {
        type: Schema.ObjectId, ref: "RestorationLocal"
    }
});

module.exports = mongoose.model("Product", product);