var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var productInOrder = new Schema({
    productId: Schema.Types.ObjectId,
    quantity: Number,
    status: {
        type: String,
        enum: ["Pedido", "En Curso", "Listo", "Servido"]
    }
})

var order = new Schema({
    localID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    waiter: Schema.Types.ObjectId,
    creationDate: { type: Date, default: Date.now },
    products: [productInOrder]
});

module.exports = mongoose.model("Order", order);