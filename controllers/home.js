const Review = require("../models/Review"); // Import the Review model

module.exports = {
  getIndex: (req, res, isDesktop) => {
    res.render('index', { isDesktop });
  },
  getDisneySelection: (req, res, isDesktop) => {
    res.render('disney-selection', { isDesktop });
  },
  getSpaceMountain: async (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    const review = await Review.find({ user: req.user.id });
    res.render('space-mountain', { user: req.user, isDesktop, loggedIn, review: review });
  },  
  reviewSpaceMountain: (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    res.render('review-space-mountain', { isDesktop }, {
      loggedIn: loggedIn,
    });
  },
};