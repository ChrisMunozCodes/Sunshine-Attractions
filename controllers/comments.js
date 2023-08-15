const Comment = require("../models/Comment"); // Import the Comment model
const Review = require("../models/Review"); // Import the Review model


module.exports = {
    createComment: async (req, res) => {
        try {
          const newComment = await Comment.create({
            commentDesc: req.body.commentDesc,
            likes: 0,
            dislikes: 0,
            review: req.params.id, // Associating comment with review
            user: req.user.id,    // Assigning the user who created the comment
          });

              // Update the corresponding review's comments array
    await Review.findByIdAndUpdate(
        req.params.id, // The review's _id
        { $push: { comments: newComment._id } }, // Add the new comment's _id to the comments array
        { new: true } // Return the updated review document
      );
      
          // Redirect back to the page or send a response
          res.redirect(`back`);
        } catch (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
        }
      },
      likeComment: async (req, res) => {
        try {
          const commentId = req.params.id;
          const userId = req.user._id;
      
          // Check if the user has already liked the review
          const comment = await Comment.findById(commentId);
          const hasLiked = comment.likedBy.includes(userId);
      
          if (hasLiked) {
            // User has already liked the review, remove their like
            comment.likes--;
            comment.likedBy = comment.likedBy.filter(likedUserId => likedUserId.toString() !== userId.toString());
          } else {
            // User hasn't liked the review, add their like
            comment.likes++;
            comment.likedBy.push(userId);
          }
          res.json({
            liked: hasLiked,  // true or false depending on whether the user liked or unliked
            likes: comment.likes,  // updated like count
          });
          await comment.save();
        } catch (err) {
          console.log(err);
          res.redirect("back");
        }
      },
      dislikeComment: async (req, res) => {
        try {
          const commentId = req.params.id;
          const userId = req.user._id;
      
          // Check if the user has already liked the review
          const comment = await Comment.findById(commentId);
          const hasDisliked = comment.dislikedBy.includes(userId);
      
          if (hasDisliked) {
            // User has already liked the review, remove their like
            comment.dislikes--;
            comment.dislikedBy = comment.dislikedBy.filter(dislikedUserId => dislikedUserId.toString() !== userId.toString());
          } else {
            // User hasn't liked the review, add their like
            comment.dislikes++;
            comment.dislikedBy.push(userId);
          }
          res.json({
            disliked: hasDisliked,  // true or false depending on whether the user liked or unliked
            dislikes: comment.dislikes,  // updated like count
          });
          await comment.save();
        } catch (err) {
          console.log(err);
          res.redirect("back");
        }
      },
  };
  
  
  
  
  
  