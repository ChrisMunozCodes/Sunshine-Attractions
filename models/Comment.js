const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },    
  commentedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  commentDesc: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  likedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  dislikes: {
    type: Number,
  },
  dislikedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);