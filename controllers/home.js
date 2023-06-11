module.exports = {
  getIndex: (req, res, isDesktop) => {
    res.render('index', { isDesktop });
  },
};