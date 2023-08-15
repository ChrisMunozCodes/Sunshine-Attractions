function likeComment(commentIndex) {
    const form = document.getElementById(`likeCommentForm_${commentIndex}`);
    const commentId = form.getAttribute("data-comment-id");
  
    // Perform an AJAX request to like/unlike the comment
    fetch(`/comment/likeComment/${commentId}?_method=PUT`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => {
      // Update like count and button appearance
      const likeButton = form.querySelector("button");
      const likeCount = form.querySelector(`#like${commentIndex}`);
  
  
  
      if (data.liked) {
        likeButton.classList.remove("border-gray", "text-black");
        likeButton.classList.add("border-gray", "text-gray-400");
      } else {
        likeButton.classList.add("border-gray", "text-black");
        likeButton.classList.remove("border-gray", "text-gray-400");
      }
  
      likeCount.textContent = data.likes;
    })
    .catch(error => {
      console.error("Error liking comment:", error);
    }
)}