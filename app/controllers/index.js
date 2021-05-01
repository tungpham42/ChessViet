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
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/about", {
    bodyClass: "about",
    fullUrl: fullUrl,
    title: "Giới thiệu",
    board: "",
    langUrl: "/about"
  });
});

router.get("/moi-choi", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/ai", {
    bodyClass: "game",
    level: 1,
    levelTxt: "Mới chơi",
    fullUrl: fullUrl,
    title: "Mới chơi",
    board: "",
    langUrl: "/newbie"
  });
});

router.get("/de", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/ai", {
    bodyClass: "game",
    level: 2,
    levelTxt: "Dễ",
    fullUrl: fullUrl,
    title: "Dễ",
    board: "",
    langUrl: "/easy"
  });
});

router.get("/binh-thuong", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/ai", {
    bodyClass: "game",
    level: 3,
    levelTxt: "Bình thường",
    fullUrl: fullUrl,
    title: "Bình thường",
    board: "",
    langUrl: "/normal"
  });
});

router.get("/kho", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/ai", {
    bodyClass: "game",
    level: 4,
    levelTxt: "Khó",
    fullUrl: fullUrl,
    title: "Khó",
    board: "",
    langUrl: "/hard"
  });
});

router.get("/cao-thu", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/ai", {
    bodyClass: "game",
    level: 5,
    levelTxt: "Cao thủ",
    fullUrl: fullUrl,
    title: "Cao thủ",
    board: "",
    langUrl: "/insane"
  });
});

router.get("/choi-voi-nhau", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/human", {
    bodyClass: "game",
    fullUrl: fullUrl,
    title: "Chơi với nhau",
    board: "",
    langUrl: "/play-with-friend"
  });
});

router.get("/xep-co", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("pages/setup", {
    bodyClass: "setup",
    fullUrl: fullUrl,
    title: "Xếp bàn cờ",
    board: "",
    langUrl: "/set-up"
  });
});

router.get("/en", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
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
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("en/pages/about", {
    bodyClass: "about",
    fullUrl: fullUrl,
    title: "About",
    board: "",
    langUrl: "/gioi-thieu"
  });
});

router.get("/newbie", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("en/pages/ai", {
    bodyClass: "game",
    level: 1,
    levelTxt: "Newbie",
    fullUrl: fullUrl,
    title: "Newbie",
    board: "",
    langUrl: "/moi-choi"
  });
});

router.get("/easy", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("en/pages/ai", {
    bodyClass: "game",
    level: 2,
    levelTxt: "Easy",
    fullUrl: fullUrl,
    title: "Easy",
    board: "",
    langUrl: "/de"
  });
});

router.get("/normal", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("en/pages/ai", {
    bodyClass: "game",
    level: 3,
    levelTxt: "Normal",
    fullUrl: fullUrl,
    title: "Normal",
    board: "",
    langUrl: "/binh-thuong"
  });
});

router.get("/hard", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("en/pages/ai", {
    bodyClass: "game",
    level: 4,
    levelTxt: "Hard",
    fullUrl: fullUrl,
    title: "Hard",
    board: "",
    langUrl: "/kho"
  });
});

router.get("/insane", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("en/pages/ai", {
    bodyClass: "game",
    level: 5,
    levelTxt: "Insane",
    fullUrl: fullUrl,
    title: "Insane",
    board: "",
    langUrl: "/cao-thu"
  });
});

router.get("/play-with-friend", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("en/pages/human", {
    bodyClass: "game",
    fullUrl: fullUrl,
    title: "Play with friend",
    board: "",
    langUrl: "/choi-voi-nhau"
  });
});

router.get("/set-up", function(req, res){
  fullUrl = "https://chessviet.com" + req.originalUrl;
  res.render("en/pages/setup", {
    bodyClass: "setup",
    fullUrl: fullUrl,
    title: "Setup board",
    board: "",
    langUrl: "/xep-co"
  });
});

module.exports = router;