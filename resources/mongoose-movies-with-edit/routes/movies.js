var express = require("express");
var router = express.Router();
var moviesCtrl = require("../controllers/movies");

router.get("/", moviesCtrl.index);
router.get("/new", moviesCtrl.new);
router.get("/:id/edit", moviesCtrl.edit);
router.get("/:id", moviesCtrl.show);
router.put("/:id", moviesCtrl.update);
router.post("/", moviesCtrl.create);

module.exports = router;
