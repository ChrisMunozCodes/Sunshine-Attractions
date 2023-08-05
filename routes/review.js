const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review");
const upload = require("../middleware/multer");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
//Post Routes - simplified for now

router.post("/createReview", upload.none(), reviewController.createReview);
router.delete("/deleteReview/:id", reviewController.deleteReview);

module.exports = router;