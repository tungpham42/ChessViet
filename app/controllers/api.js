var express = require("express");
var router = express.Router();

var room_md = require("../models/room");

router.post("/createRoom", function(req, res){
  var room = req.body;

  room = {
    code: room.code,
    fen: room.fen,
    pass: room.pass,
    modified_at: Date.now()
  };
  // Insert to DB
  room_md.addRoom(room);
});

module.exports = router;