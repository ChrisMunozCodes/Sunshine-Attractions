const openCommentModal = (reviewId) => {
    // Get the comment modal associated with the review
    const commentModal = document.getElementById(`my_modal_${reviewId}`);
    
    // Show the comment modal
    commentModal.showModal();
  };
  
  const closeCommentModal = () => {
    const commentModal = document.getElementById("my_modal_4");
    commentModal.close();
  };