const Review = require("../models/Review"); // Import the Review model
const Comment = require("../models/Comment"); // Import the Comment model
const Marker = require("../models/Marker"); // Import the Comment model

module.exports = {
  getMaps: (req, res) => {
    const loggedIn = req.isAuthenticated();
    res.render('maps', { user: req.user, loggedIn });
  },
  getMagicKingdomMaps: async (req, res) => {
    const loggedIn = req.isAuthenticated();

    GOOGLE_MAP_API = process.env.GOOGLE_MAP_API
    GOOGLE_MAP_ID = process.env.GOOGLE_MAP_ID

    const mapAPIURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API}&map_ids=${GOOGLE_MAP_ID}&callback=initMap`

    const rides = await Marker.find({ park: "magic-kingdom" })
    console.log(rides)
    res.render('magickingdom-maps', { user: req.user, loggedIn, mapAPIURL, rides});
  },
};

