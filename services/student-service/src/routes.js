const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);

module.exports = router;