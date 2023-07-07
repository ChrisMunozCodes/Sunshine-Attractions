const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const User = require("../models/User"); // Import the User model

module.exports = {
  getProfile: (req, res, isDesktop) => {
      res.render("profile.ejs", { isDesktop });
  }
}
