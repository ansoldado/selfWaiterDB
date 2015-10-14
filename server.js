var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();

mongoose.connect("mongodb://localhost/restorationLocal", function(err, res){
    if(err){
        console.log("Error conectando a DB: "+err);
    }else{
        console.log("Conectado a DB.")
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.get("/", function(req, res){
    res.send("Hola Mundo!");
});
require("./routes")(app);

app.listen(5000);
console.log("Server Escuchando en puerto 5000.");