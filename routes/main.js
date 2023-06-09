const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const userController = require("../controllers/user");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now

// Intial homepage route, has an additional isDesktop variable to track what screen the user is using in order to show them the proper css
// layout.

router.get('/', (req, res) => {
    console.log(req.cookies.isDesktop)
    const isDesktop = req.cookies.isDesktop === 'true'; // Access the cookie value
  
    res.render('index', { isDesktop });
  });

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/profile", ensureAuth, userController.getProfile);
router.get("/disney-selection", homeController.getDisneySelection);
router.get("/space-mountain", homeController.getSpaceMountain);
router.get("/review-space-mountain", homeController.reviewSpaceMountain);

module.exports = router;
