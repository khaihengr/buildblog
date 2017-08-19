var express = require("express");
var router = express.Router();

router.get("/ ", (req, res) => {
	res.send("<h3>hello world</h3>");
});

module.exports = router;
