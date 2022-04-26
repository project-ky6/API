const express = require("express");
const router = express.Router();

const usersController = require("../controllers/UsersController");

router.post('/login', usersController.login);
router.post('/sigin', usersController.sigin);

module.exports = router;

