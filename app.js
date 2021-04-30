var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");
var partials = require("express-partials");
var engine = require("ejs-layout");
var md5 = require("md5");

var socketio = require("socket.io");

var app = express();
// body parser

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.set("views", __dirname + "/app/views");
app.set("view engine", "ejs");
app.engine("ejs", engine.__express);

app.use(partials());

// Static folder
// app.use("/static", express.static("/public"));

var controllers = require(__dirname + "/app/controllers");

app.use(controllers);

var host = config.get("server.host");
var port = config.get("server.port");

var server = app.listen(port, host, function(){
  console.log("Server is running on port", port);
});

var io = socketio(server);

var socketControl = require("./app/common/socketControl")(io);