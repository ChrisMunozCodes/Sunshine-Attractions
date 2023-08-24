const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },    
  page: {
    type: String,
    required: true,
  },
  reviewedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },    
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
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
