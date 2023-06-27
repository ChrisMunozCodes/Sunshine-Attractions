module.exports = {
  getIndex: (req, res, isDesktop) => {
    res.render('index', { isDesktop });
  },
  getDisneySelection: (req, res, isDesktop) => {
    res.render('disney-selection', { isDesktop });
  },
  getSpaceMountain: (req, res, isDesktop) => {
    res.render('space-mountain', { isDesktop });
  },
  reviewSpaceMountain: (req, res, isDesktop) => {
    res.render('review-space-mountain', { isDesktop });
  },
};