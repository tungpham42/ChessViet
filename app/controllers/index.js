var express = require("express");

var router = express.Router();

router.use("/api", require(__dirname + "/api"));

router.param("board", function(req, res, next, board){
  next();
});

router.param("fen", function(req, res, next, fen){
  next();
});

router.get("/", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/ai", {
    bodyClass: "game",
    level: 3,
    levelTxt: "Normal",
    fullUrl: fullUrl,
    title: "Home",
    board: ""
  });
});

router.get("/about", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/about", {
    bodyClass: "about",
    fullUrl: fullUrl,
    title: "About",
    board: ""
  });
});

router.get("/newbie", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/ai", {
    bodyClass: "game",
    level: 1,
    levelTxt: "Newbie",
    fullUrl: fullUrl,
    title: "Newbie",
    board: ""
  });
});

router.get("/easy", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/ai", {
    bodyClass: "game",
    level: 2,
    levelTxt: "Easy",
    fullUrl: fullUrl,
    title: "Easy",
    board: ""
  });
});

router.get("/normal", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/ai", {
    bodyClass: "game",
    level: 3,
    levelTxt: "Normal",
    fullUrl: fullUrl,
    title: "Normal",
    board: ""
  });
});

router.get("/hard", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/ai", {
    bodyClass: "game",
    level: 4,
    levelTxt: "Hard",
    fullUrl: fullUrl,
    title: "Hard",
    board: ""
  });
});

router.get("/insane", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/ai", {
    bodyClass: "game",
    level: 5,
    levelTxt: "Insane",
    fullUrl: fullUrl,
    title: "Insane",
    board: ""
  });
});

router.get("/play-with-friend", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/human", {
    bodyClass: "game",
    fullUrl: fullUrl,
    title: "Play with friend",
    board: ""
  });
});

router.get("/set-up", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/setup", {
    bodyClass: "setup",
    fullUrl: fullUrl,
    title: "Setup board",
    board: ""
  });
});

router.get("/chat", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/chat", {
    bodyClass: "game",
    fullUrl: fullUrl,
    title: "Chat",
    board: ""
  })
});

module.exports = router;