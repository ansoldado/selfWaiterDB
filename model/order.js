var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var Product = require("./product.js");
var Product = require("./table.js");


var productInOrder = new Schema({
    productId: {
    type: Schema.ObjectId, ref: "Product"
    },
    quantity: Number,
    status: {
        type: String,
        enum: ["Pedido", "En Curso", "Listo", "Servido"]
    }
})

var order = new Schema({
    tableId: {
        type: Schema.ObjectId, ref: "Table",
        required: true
    },
    waiter: Schema.ObjectId,
    creationDate: { type: Date, default: Date.now },
    products: [productInOrder],
    status: {
        type: String,
        enum: ["Activo", "Finalizado"]
    }
});

module.exports = mongoose.model("Order", order);