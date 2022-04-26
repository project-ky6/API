const express = require("express");
const router = express.Router();

const categoreisController = require("../controllers/CategoriesController");

router.get('/:slug', categoreisController.show);
router.get('/', categoreisController.index);

module.exports = router;
