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
  // Initialize variables for filtering
  let filter = req.query.filter || 'all'; // Default to 'all' filter
  let filteredReview = [];
  
  if (filter === 'all') {
    // Fetch all reviews without any specific filtering
    filteredReview = await Review.find({})
      .populate('user')
      .populate({
        path: 'comments',
        populate: { path: 'user' }
      });
  } else if (filter === 'your') {
    // Fetch reviews submitted by the logged-in user
    if (!req.user) {
      // Redirect or handle as needed when user is not logged in
      return res.redirect("back");
    }
    filteredReview = await Review.find({ user: req.user.id })
      .populate('user')
      .populate({
        path: 'comments',
        populate: { path: 'user' }
      });
  } else if (filter === 'highest-rated') {
    // Fetch reviews sorted by highest rating
    filteredReview = await Review.find({})
      .sort('-rating')
      .populate('user')
      .populate({
        path: 'comments',
        populate: { path: 'user' }
      });
  } else if (filter === 'most-critical') {
  // Fetch reviews sorted by lowest rating
  filteredReview = await Review.find({})
    .sort('rating')
    .populate('user')
    .populate({
      path: 'comments',
      populate: { path: 'user' }
    });
} else if (filter === 'most-recent') {
  // Fetch reviews sorted by most recent
  filteredReview = await Review.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
      path: 'comments',
      populate: { path: 'user' }
    });
}

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

    let existingReview = null;
    
    if (req.user) {
      existingReview = await Review.findOne({
        user: req.user.id,
        reviewedBy: { $in: [req.user.id] },
      });
    }
  
    if (existingReview) {
      // User has already submitted a review for this page
      disableReviewButton = true;
    }
  
    res.render('space-mountain', { user: req.user, isDesktop, loggedIn, review: filteredReview, averageRating, disableReviewButton, comments: comments, filter: filter });

  },
  
  reviewSpaceMountain: (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    res.render('review-space-mountain', { isDesktop }, {
      loggedIn: loggedIn,
    });
  },
};

