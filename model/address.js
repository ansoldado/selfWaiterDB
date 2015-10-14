var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var address = new Schema({
    road: {
        type: String,
    },
    roadType: {
        type: String,
    },
    number: {
        type: String,
    },
    door: {
        type: String,
    },
    phone: {
        type: String,
    },
    mail: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Address", address);
