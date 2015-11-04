var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var Address = require("./address.js");

var user = new Schema({
    name: {
        type: "String",
        required: true
    },
    pwd: {
        type: "String",
        required: true
    },
    address: {
        type: Schema.ObjectId, ref:"Address",
        required: true
    }
});

module.exports = mongoose.model("User", user);