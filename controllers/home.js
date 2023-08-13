const Review = require("../models/Review"); // Import the Review model
const Comment = require("../models/Comment"); // Import the Comment model


module.exports = {
  getIndex: (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    res.render('index', { isDesktop, loggedIn });
  },
  getDisneySelectionHomepage: (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    res.render('disney-selection-homepage', { user: req.user, isDesktop, loggedIn });
  },
  getDisneySelectionMagicKingdom: (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    res.render('disney-selection-magickingdom', { user: req.user, isDesktop, loggedIn });
  },
  getSpaceMountain: async (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    const comments = await Comment.find({})
    .populate('user')
    .populate({
      path: 'comments', // Populate the 'comments' field for each review
      populate: { path: 'user' } // Populate the 'user' field for comments
    });
    const review = await Review.find({})
      .populate('user')
      .populate({
        path: 'comments', // Populate the 'comments' field for each review
        populate: { path: 'user' } // Populate the 'user' field for comments
      });
  
    const totalReviews = review.length;
    
    // Calculate the total rating sum
    const totalRatingSum = review.reduce((sum, review) => sum + review.rating, 0);
    
    // Calculate the average rating
    const averageRating = totalRatingSum / totalReviews;
  
    // Initialize the disableReviewButton variable
    let disableReviewButton = false;
  
    // Check if the user has already submitted a review for this page
    const existingReview = await Review.findOne({
      user: req.user.id,
      reviewedBy: { $in: [req.user.id] },
    });
  
    if (existingReview) {
      // User has already submitted a review for this page
      disableReviewButton = true;
    }
  
    res.render('space-mountain', { user: req.user, isDesktop, loggedIn, review: review, averageRating, disableReviewButton, comments: comments });
  },
  
  reviewSpaceMountain: (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    res.render('review-space-mountain', { isDesktop }, {
      loggedIn: loggedIn,
    });
  },
};

