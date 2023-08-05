const cloudinary = require("../middleware/cloudinary");
const User = require("../models/User"); // Import the User model
const Review = require("../models/Review"); // Import the Review model
const csrf = require("csurf");
const csrfToken = csrf();

module.exports = {
  getProfile: (req, res, isDesktop) => {
      const loggedIn = req.isAuthenticated();
      res.render("profile.ejs", {user: req.user, isDesktop, loggedIn });
  },
  updateProfilePicture: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await User.findOneAndUpdate(
        { _id: req.user._id }, // Assuming you have the user ID in req.user._id
        { $set: { profilePic: result.secure_url } }, // Use $set to update the profilePic field
        { new: true } // Return the updated document
      );
      console.log("Profile has been updated.");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  }
}
