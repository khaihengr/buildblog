var express = require("express");
var data = require("./data/postData");

var app = express();
app.set("data", data);

app.use(require("./routes/posts"));
app.use(require("./routes/index"));

app.listen(3000);
