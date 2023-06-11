const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const User = require("../models/User"); // Import the User model

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      const user = await User.findById(req.user.id);
      const profilePic = req.user.profilePic;
      res.render("profile.ejs", { profilePic: profilePic, posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
}
