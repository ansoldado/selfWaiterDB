var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var address = require("./address.js");

var restorationLocal = new Schema({
    name: {
        type: String,
    },
    address: {
        type: String ,
    },
    type: {
        type: String,
        enum: ["Premium", "Normal"],
    }
});

module.exports = mongoose.model("RestorationLocal", restorationLocal);
