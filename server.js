var express = require("express");

var app = express();

app.get("/", function (req, res) {
	res.end("hehe");
});

app.listen(8080);