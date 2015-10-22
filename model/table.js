var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var RestorationLocal = require("./restorationLocal");
var Waiter = require("./waiter");

var table = new Schema({
    localId: {
        type: Schema.ObjectId, ref:"RestorationLocal",
        required: true
    },
    waiterId: {
        type: Schema.ObjectId, ref:"Waiter",
        required: true
    },
    qrString: {
        type:  String
    },
    orderId: {
        type: String,
        default: null
    },
    estado: {
        type: String,
        enum: ['ocupada', 'libre', 'reservada', 'pendienteLiberar']
    }
});

module.exports = mongoose.model("Table", table);