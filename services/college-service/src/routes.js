const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.get("/", controller.getColleges);
router.post("/", controller.addCollege);

module.exports = router;