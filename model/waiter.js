var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var User = require("./user.js");
var RestorationLocal = require("./restorationLocal.js");

var waiter = new Schema({
    user: {
        type: Schema.ObjectId, ref: "User",
        required: true
    },
    localId: {
        type: Schema.ObjectId, ref: "RestorationLocal",
        required: true
    }
});

module.exports = mongoose.model("Waiter", waiter);
