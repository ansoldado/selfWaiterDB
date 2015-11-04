var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var address = require("./address.js");

var restorationLocal = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: Schema.ObjectId, ref: 'address' ,
        required: true
    },
    type: {
        type: String,
        enum: ["Premium", "Normal"],
        required: true
    }
});

module.exports = mongoose.model("RestorationLocal", restorationLocal);
