const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get('/', (req, res) => {
    console.log(req.cookies.isDesktop)
    const isDesktop = req.cookies.isDesktop === 'true'; // Access the cookie value
  
    // Alternatively, access the value from local storage
    // const isDesktop = req.locals.isDesktop === 'true';
  
    res.render('index', { isDesktop });
  });
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
