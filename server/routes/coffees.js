const express = require("express");
const router = express.Router();

const coffeesController = require("../controllers/CoffeesController");

router.get('/', coffeesController.index);

module.exports = router;
