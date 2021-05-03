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
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/ai", {
    bodyClass: "home",
    level: 3,
    levelTxt: "Bình thường",
    fullUrl: fullUrl,
    title: "Trang chủ",
    board: "",
    langUrl: "/en"
  });
});

router.get("/gioi-thieu", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/about", {
    bodyClass: "about",
    fullUrl: fullUrl,
    title: "Giới thiệu",
    board: "",
    langUrl: "/about"
  });
});

router.get("/moi-choi", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/ai", {
    bodyClass: "home",
    level: 1,
    levelTxt: "Mới chơi",
    fullUrl: fullUrl,
    title: "Mới chơi",
    board: "",
    langUrl: "/newbie"
  });
});

router.get("/de", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/ai", {
    bodyClass: "home",
    level: 2,
    levelTxt: "Dễ",
    fullUrl: fullUrl,
    title: "Dễ",
    board: "",
    langUrl: "/easy"
  });
});

router.get("/binh-thuong", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/ai", {
    bodyClass: "home",
    level: 3,
    levelTxt: "Bình thường",
    fullUrl: fullUrl,
    title: "Bình thường",
    board: "",
    langUrl: "/normal"
  });
});

router.get("/kho", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/ai", {
    bodyClass: "home",
    level: 4,
    levelTxt: "Khó",
    fullUrl: fullUrl,
    title: "Khó",
    board: "",
    langUrl: "/hard"
  });
});

router.get("/cao-thu", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/ai", {
    bodyClass: "home",
    level: 5,
    levelTxt: "Cao thủ",
    fullUrl: fullUrl,
    title: "Cao thủ",
    board: "",
    langUrl: "/insane"
  });
});

router.get("/choi-voi-nhau", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/human", {
    bodyClass: "home",
    fullUrl: fullUrl,
    title: "Chơi với nhau",
    board: "",
    langUrl: "/play-with-friend"
  });
});

router.get("/xep-co", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/setup", {
    bodyClass: "setup",
    fullUrl: fullUrl,
    title: "Xếp bàn cờ",
    board: "8/8/8/8/8/8/8/8",
    langUrl: "/set-up"
  });
});

router.get("/xep-co/:board([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/setup", {
    bodyClass: "setup",
    fullUrl: fullUrl,
    title: "Xếp bàn cờ",
    board: "",
    langUrl: "/set-up/" + req.params.board,
    board: req.params.board
  });
});

router.get("/en", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/ai", {
    bodyClass: "home",
    level: 3,
    levelTxt: "Normal",
    fullUrl: fullUrl,
    title: "Home",
    board: "",
    langUrl: "/"
  });
});

router.get("/about", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/about", {
    bodyClass: "about",
    fullUrl: fullUrl,
    title: "About",
    board: "",
    langUrl: "/gioi-thieu"
  });
});

router.get("/newbie", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/ai", {
    bodyClass: "home",
    level: 1,
    levelTxt: "Newbie",
    fullUrl: fullUrl,
    title: "Newbie",
    board: "",
    langUrl: "/moi-choi"
  });
});

router.get("/easy", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/ai", {
    bodyClass: "home",
    level: 2,
    levelTxt: "Easy",
    fullUrl: fullUrl,
    title: "Easy",
    board: "",
    langUrl: "/de"
  });
});

router.get("/normal", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/ai", {
    bodyClass: "home",
    level: 3,
    levelTxt: "Normal",
    fullUrl: fullUrl,
    title: "Normal",
    board: "",
    langUrl: "/binh-thuong"
  });
});

router.get("/hard", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/ai", {
    bodyClass: "home",
    level: 4,
    levelTxt: "Hard",
    fullUrl: fullUrl,
    title: "Hard",
    board: "",
    langUrl: "/kho"
  });
});

router.get("/insane", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/ai", {
    bodyClass: "home",
    level: 5,
    levelTxt: "Insane",
    fullUrl: fullUrl,
    title: "Insane",
    board: "",
    langUrl: "/cao-thu"
  });
});

router.get("/play-with-friend", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/human", {
    bodyClass: "home",
    fullUrl: fullUrl,
    title: "Play with friend",
    board: "",
    langUrl: "/choi-voi-nhau"
  });
});

router.get("/set-up", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/setup", {
    bodyClass: "setup",
    fullUrl: fullUrl,
    title: "Setup board",
    board: "8/8/8/8/8/8/8/8",
    langUrl: "/xep-co"
  });
});

router.get("/set-up/:board([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/setup", {
    bodyClass: "setup",
    fullUrl: fullUrl,
    title: "Setup board",
    langUrl: "/xep-co/" + req.params.board,
    board: req.params.board
  });
});

router.get("/ban-co/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/board", {
    bodyClass: "home",
    fullUrl: fullUrl,
    title: "Bàn cờ",
    board: "",
    langUrl: "/board/" + req.params.fen,
    fen: req.params.fen
  });
});

router.get("/ban-co-moi-choi/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/boardAi", {
    bodyClass: "home",
    level: 1,
    levelTxt: "Mới chơi",
    fullUrl: fullUrl,
    title: "Bàn cờ mới chơi",
    board: "",
    langUrl: "/newbie-board/" + req.params.fen,
    fen: req.params.fen
  });
});

router.get("/ban-co-de/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/boardAi", {
    bodyClass: "home",
    level: 2,
    levelTxt: "Dễ",
    fullUrl: fullUrl,
    title: "Bàn cờ dễ",
    board: "",
    langUrl: "/easy-board/" + req.params.fen,
    fen: req.params.fen
  });
});

router.get("/ban-co-binh-thuong/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/boardAi", {
    bodyClass: "home",
    level: 3,
    levelTxt: "Bình thường",
    fullUrl: fullUrl,
    title: "Bàn cờ bình thường",
    board: "",
    langUrl: "/normal-board/" + req.params.fen,
    fen: req.params.fen
  });
});

router.get("/ban-co-kho/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/boardAi", {
    bodyClass: "home",
    level: 4,
    levelTxt: "Khó",
    fullUrl: fullUrl,
    title: "Bàn cờ khó",
    board: "",
    langUrl: "/hard-board/" + req.params.fen,
    fen: req.params.fen
  });
});

router.get("/ban-co-cao-thu/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("pages/boardAi", {
    bodyClass: "home",
    level: 5,
    levelTxt: "Cao thủ",
    fullUrl: fullUrl,
    title: "Bàn cờ cao thủ",
    board: "",
    langUrl: "/insane-board/" + req.params.fen,
    fen: req.params.fen
  });
});

router.get("/board/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/board", {
    bodyClass: "home",
    fullUrl: fullUrl,
    title: "Board",
    board: "",
    langUrl: "/ban-co/" + req.params.fen,
    fen: req.params.fen
  });
});

router.get("/newbie-board/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/boardAi", {
    bodyClass: "home",
    level: 1,
    levelTxt: "Newbie",
    fullUrl: fullUrl,
    title: "Newbie board",
    board: "",
    langUrl: "/ban-co-moi-choi/" + req.params.fen,
    fen: req.params.fen
  });
});

router.get("/easy-board/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/boardAi", {
    bodyClass: "home",
    level: 2,
    levelTxt: "Easy",
    fullUrl: fullUrl,
    title: "Easy board",
    board: "",
    langUrl: "/ban-co-de/" + req.params.fen,
    fen: req.params.fen
  });
});

router.get("/normal-board/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/boardAi", {
    bodyClass: "home",
    level: 3,
    levelTxt: "Normal",
    fullUrl: fullUrl,
    title: "Normal board",
    board: "",
    langUrl: "/ban-co-binh-thuong/" + req.params.fen,
    fen: req.params.fen
  });
});

router.get("/hard-board/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/boardAi", {
    bodyClass: "home",
    level: 4,
    levelTxt: "Hard",
    fullUrl: fullUrl,
    title: "Hard board",
    board: "",
    langUrl: "/ban-co-kho/" + req.params.fen,
    fen: req.params.fen
  });
});

router.get("/insane-board/:fen([a-zA-Z0-9\-\/\s|%20|&nbsp;]+)", function(req, res){
  fullUrl = "https://" + req.hostname + req.path;
  res.render("en/pages/boardAi", {
    bodyClass: "home",
    level: 5,
    levelTxt: "Insane",
    fullUrl: fullUrl,
    title: "Insane board",
    board: "",
    langUrl: "/ban-co-cao-thu/" + req.params.fen,
    fen: req.params.fen
  });
});

module.exports = router;