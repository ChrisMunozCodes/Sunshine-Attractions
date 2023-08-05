const cloudinary = require("../middleware/cloudinary");;
const Review = require("../models/Review"); // Import the Review model
const User = require("../models/User"); // Import the User model


module.exports = {
  createReview: async (req, res) => {
    try {
      await Review.create({
        rating: parseInt(req.body.rating),
        desc: req.body.desc,
        user: req.user.id,
      });
      console.log("Review has been added!");
      res.redirect("back");
    } catch (err) {
      console.log(err);
    }
  },
  getYourReviews: async (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    const review = await Review.find({}).populate('user');
    res.render("your-reviews.ejs", {user: req.user, isDesktop, loggedIn, review: review});
    
},
  deleteReview: async (req, res) => {
    try {
      const review = await Review.findById(req.params.id);
      if (!review) {
        return res.redirect("/your-reviews");
      }
  
      // Check if the current user is the owner of the review
      if (review.user.toString() === req.user._id.toString()) {
        await Review.deleteOne({ _id: req.params.id });
        console.log("Deleted Review");
      } else {
        console.log("Unauthorized deletion attempt");
      }
      res.redirect("/your-reviews");
    } catch (err) {
      console.error("Error deleting review:", err);
      res.redirect("/your-reviews");
    }
  },
};