module.exports = {
  getIndex: (req, res, isDesktop) => {
    res.render('index', { isDesktop });
  },
  getDisneySelection: (req, res, isDesktop) => {
    res.render('disney-selection', { isDesktop });
  },
  getSpaceMountain: (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    res.render('space-mountain', { user: req.user, isDesktop, loggedIn });
  },  
  reviewSpaceMountain: (req, res, isDesktop) => {
    const loggedIn = req.isAuthenticated();
    res.render('review-space-mountain', { isDesktop }, {
      loggedIn: loggedIn,
    });
  },
};