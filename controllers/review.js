const cloudinary = require("../middleware/cloudinary");;
const Review = require("../models/Review"); // Import the Review model
const User = require("../models/User"); // Import the User model


module.exports = {
   createReview: async (req, res) => {
    try {
      const pageId = req.body.pageId; // Assuming you have a field in the form with the page ID
  
      // Check if the user has already submitted a review for this page
      const existingReview = await Review.findOne({
        user: req.user.id,
        reviewedBy: { $in: [req.user.id] },
      });
  
      if (existingReview) {
        // User has already submitted a review for this page
        return res.status(400).json({ error: "You can only submit one review per page." });
      }
  
    // Upload images to cloudinary
    const uploadPromises = req.files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path);
      return {
        image: result.secure_url,
        cloudinaryId: result.public_id,
      };
    });

    // Wait for all uploads to finish
    const uploadedImages = await Promise.all(uploadPromises);

    // Extract image URLs and cloudinary IDs
    const images = uploadedImages.map((img) => img.image);
    const cloudinaryIds = uploadedImages.map((img) => img.cloudinaryId);
  
      // Create the review in the database
      await Review.create({
        rating: parseInt(req.body.rating),
        images: images,
        cloudinaryIds: cloudinaryIds,
        desc: req.body.desc,
        user: req.user.id,
        reviewedBy: [req.user.id], // Add the user ID to the reviewedBy array
        likes: 0,
      });
  
      console.log("Review has been added!");
      res.redirect("back");
    } catch (err) {
      console.log(err);
      res.redirect("back");
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
  likeReview: async (req, res) => {
    try {
      const reviewId = req.params.id;
      const userId = req.user._id;
  
      // Check if the user has already liked the review
      const review = await Review.findById(reviewId);
      const hasLiked = review.likedBy.includes(userId);
  
      if (hasLiked) {
        // User has already liked the review, remove their like
        review.likes--;
        review.likedBy = review.likedBy.filter(likedUserId => likedUserId.toString() !== userId.toString());
      } else {
        // User hasn't liked the review, add their like
        review.likes++;
        review.likedBy.push(userId);
      }
  
      await review.save();
      res.redirect("back");
    } catch (err) {
      console.log(err);
      res.redirect("back");
    }
  },
};