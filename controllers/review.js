const cloudinary = require("../middleware/cloudinary");;
const Review = require("../models/Review"); // Import the Review model

module.exports = {
  createReview: async (req, res) => {
    try {
      await Review.create({
        rating: parseInt(req.body.rating),
        desc: req.body.desc,
        user: req.user.id,
      });
      console.log("Review has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};