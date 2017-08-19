var express = require("express");
var router = express.Router();

router.get("/post", (req, res) => {
	var data = req.app.get("data");
	var titlelist = "";
	data.forEach(function(element) {
		titlelist += `
        <h3>${element.title}</h3>
        <p>${element.content}</p>
        `;
	}, this);

	res.send(titlelist);
});
router.get("/post/:postid", (req, res) => {
	var data = req.app.get("data");

	var id = req.params.postid;
	var titlelist = `<h3>${data[id].title}</h3>
				<p>${data[id].content}</p>`;

	res.send(titlelist);
});

module.exports = router;
