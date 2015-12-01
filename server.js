var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();

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

var io = require("socket.io").listen(app.listen(process.env.PORT || 5000));

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('register', function (data) {
        console.info("Registrando mesa : "+data);
        socket.on('table'+data, function(data2){
            console.info("enviando por el socket: "+'table'+data+'camarero');
            io.sockets.emit('table'+data+'camarero', data2);
        });
        /*
        socket.on('waiter'+data, function(data2){
            console.info("enviando por el socket: "+'waiter'+data);
            io.sockets.emit('waiter'+data+'camarero', data2);
        });*/
        io.sockets.emit('table'+data,"Actualizacion de la mesa: "+ data);
        io.sockets.emit('reciveFromServer'+data,"Registrado!");
    });
    socket.on('waiter')
});


console.log("Server Escuchando en puerto 5000.");