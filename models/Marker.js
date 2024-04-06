const mongoose = require("mongoose");

const MarkerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },    
  lat: {
    type: Number,
    required: true,
  },
  long: [{
    type: Number,
    required: true,
  }],
  park: {
    type: String,
    required: true,
  },    
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Marker", MarkerSchema);
