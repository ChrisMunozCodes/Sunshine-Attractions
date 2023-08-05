const Review = require("../models/Review"); // Import the Review model


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
    const review = await Review.find({}).populate('user');

    const totalReviews = review.length;
      
      // Calculate the total rating sum
      const totalRatingSum = review.reduce((sum, review) => sum + review.rating, 0);
      
      // Calculate the average rating
      const averageRating = totalRatingSum / totalReviews;
      
    res.render('space-mountain', { user: req.user, isDesktop, loggedIn, review: review, averageRating });
  },  
  reviewSpaceMountain: (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    res.render('review-space-mountain', { isDesktop }, {
      loggedIn: loggedIn,
    });
  },
};

