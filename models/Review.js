const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },    
  reviewedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  rating: {
    type: Number,
  },
  desc: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  cloudinaryId: {
    type: String,
    require: true,
  },
  likes: {
    type: Number,
  },
  likedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
