const express = require("express");
const router = express.Router();
const mapController = require("../controllers/map");

//Main Routes - simplified for now

// Intial homepage route, has an additional isDesktop variable to track what screen the user is using in order to show them the proper css
// layout.

router.get("/maps", mapController.getMaps);
router.get("/magickingdom-maps", mapController.getMagicKingdomMaps);


module.exports = router;
