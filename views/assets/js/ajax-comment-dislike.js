function dislikeComment(commentIndex) {
    const form = document.getElementById(`dislikeCommentForm_${commentIndex}`);
    const commentId = form.getAttribute("data-comment-id2");
  
    // Perform an AJAX request to like/unlike the comment
    fetch(`/comment/dislikeComment/${commentId}?_method=PUT`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => {
      // Update like count and button appearance
      const dislikeButton = form.querySelector("button");
      const dislikeCount = form.querySelector(`#dislike${commentIndex}`);
  
  
  
      if (data.disliked) {
        dislikeButton.classList.remove("border-gray", "text-black");
        dislikeButton.classList.add("border-gray", "text-gray-400");
      } else {
        dislikeButton.classList.add("border-gray", "text-black");
        dislikeButton.classList.remove("border-gray", "text-gray-400");
      }
  
      dislikeCount.textContent = data.dislikes;
    })
    .catch(error => {
      console.error("Error liking comment:", error);
    }
)}