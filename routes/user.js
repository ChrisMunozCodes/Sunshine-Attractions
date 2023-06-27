const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// User Routes.
router.post('/update-profile-pic', userController.updateUserProfilePic);

// Add more user routes as needed.
module.exports = router;
