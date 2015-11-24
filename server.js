var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

io.sockets.on("connection", function(socket){
   socket.on("message", function(){
      console.log("mensaje recibido");
   });
    console.log("socket nuevo conectado\n\n\n\n\n");
});
console.log(io);

mongoose.connect("mongodb://user:user@ds037814.mongolab.com:37814/heroku_v3hmj82h", function(err, res){
    if(err){
        console.log("Error conectando a DB: "+err);
    }else{
        console.log("Conectado a DB.")
    }
});
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.get("/", function(req, res){
    res.send("SelfWaiter RLZ!");
});
require("./routes")(app);

server.listen(process.env.PORT || 5000);
console.log("Server Escuchando en puerto 5000.");