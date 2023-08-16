const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const userController = require("../controllers/user");
const homeController = require("../controllers/home");
const reviewController = require("../controllers/review");
const upload = require("../middleware/multer");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now

// Intial homepage route, has an additional isDesktop variable to track what screen the user is using in order to show them the proper css
// layout.

router.get('/', (req, res) => {
    console.log(req.cookies.isDesktop)
    const isDesktop = req.cookies.isDesktop === 'true'; // Access the cookie value
    const loggedIn = req.isAuthenticated();
    res.render('index', { isDesktop, loggedIn, user: req.user });
  });

router.post("/updateProfilePicture", upload.single("file"), userController.updateProfilePicture);

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/profile", ensureAuth, userController.getProfile);
router.get("/disney-selection-homepage", homeController.getDisneySelectionHomepage);
router.get("/disney-selection-magickingdom", homeController.getDisneySelectionMagicKingdom);
router.get("/space-mountain", homeController.getSpaceMountain);
router.get("/review-space-mountain", homeController.reviewSpaceMountain);
router.get("/your-reviews", ensureAuth, reviewController.getYourReviews);
router.get("/your-comments", ensureAuth, reviewController.getYourComments);


module.exports = router;
