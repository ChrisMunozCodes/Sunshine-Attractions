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