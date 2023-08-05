// Convert rating number to stars for the review post
function setStarRating(rating, reviewIndex) {
    const stars = document.querySelectorAll(`input[name="rating-${reviewIndex}"]`);
    const starIndex = rating - 1; // Convert rating to zero-based index
  
    if (starIndex >= 0 && starIndex < stars.length) {
      stars[starIndex].checked = true;
    }
}

