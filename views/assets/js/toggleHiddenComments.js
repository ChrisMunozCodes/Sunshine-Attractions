function toggleHiddenComments(reviewIndex) {
    const hiddenSection = document.getElementById(`triggerHiddenComments${reviewIndex}`);
    hiddenSection.classList.toggle("hidden");
  }