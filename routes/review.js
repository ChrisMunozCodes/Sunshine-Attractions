const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
//Post Routes - simplified for now

router.post("/createReview", reviewController.createReview);

module.exports = router;