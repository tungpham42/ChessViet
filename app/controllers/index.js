var express = require("express");

var router = express.Router();

router.use("/api", require(__dirname + "/api"));
router.use("/admin", require(__dirname + "/admin"));
router.use("/blog", require(__dirname + "/blog"));

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

router.get("/board/:fen", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/board", {
    bodyClass: "game",
    level: 3,
    levelTxt: "Board",
    fullUrl: fullUrl,
    title: "Board",
    board: "",
    fen: fen
  });
});

router.get("/newbie-board/:fen", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/boardAi", {
    bodyClass: "game",
    level: 1,
    levelTxt: "Newbie",
    fullUrl: fullUrl,
    title: "Newbie",
    board: "",
    fen: fen
  });
});

router.get("/easy-board/:fen", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/boardAi", {
    bodyClass: "game",
    level: 2,
    levelTxt: "Easy",
    fullUrl: fullUrl,
    title: "Easy",
    board: "",
    fen: fen
  });
});

router.get("/normal-board/:fen", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/boardAi", {
    bodyClass: "game",
    level: 3,
    levelTxt: "Normal",
    fullUrl: fullUrl,
    title: "Normal",
    board: "",
    fen: fen
  });
});

router.get("/hard-board/:fen", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/boardAi", {
    bodyClass: "game",
    level: 4,
    levelTxt: "Hard",
    fullUrl: fullUrl,
    title: "Hard",
    board: "",
    fen: fen
  });
});

router.get("/insane-board/:fen", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/boardAi", {
    bodyClass: "game",
    level: 5,
    levelTxt: "Insane",
    fullUrl: fullUrl,
    title: "Insane",
    board: "",
    fen: fen
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

router.get("/set-up/:board", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/setup", {
    bodyClass: "setup",
    fullUrl: fullUrl,
    title: "Setup board",
    board: board
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