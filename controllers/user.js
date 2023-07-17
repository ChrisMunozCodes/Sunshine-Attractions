const cloudinary = require("../middleware/cloudinary");
const User = require("../models/User"); // Import the User model

module.exports = {
  getProfile: (req, res, isDesktop) => {
      res.render("profile.ejs", {user: req.user, isDesktop });
  }
}
