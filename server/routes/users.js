const express = require("express");
const router = express.Router();

const usersController = require("../controllers/UsersController");

router.get('/:slug', usersController.show);
router.get('/', usersController.index);

module.exports = router;

