const express = require("express");
const router = express.Router();

const branchesController = require("../controllers/BranchesController");

router.get('/:slug', branchesController.show);
router.get('/', branchesController.index);

module.exports = router;
