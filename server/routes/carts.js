const express = require("express");
const router = express.Router();

const cartsController = require("../controllers/CartsController");

router.get('/:slug', cartsController.show);
router.get('/', cartsController.index);

module.exports = router;

