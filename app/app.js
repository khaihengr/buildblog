var express = require("express");
var data = require("./data/postData");
var path = require("path");
var app = express();

app.set("data", data);
console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./routes/index"));
app.use(require("./routes/posts"));

app.listen(3000);
