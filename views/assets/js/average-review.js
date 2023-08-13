function calculateRoundedAverage(averageRating) {
    return Math.round(averageRating);
  }
  
  // Get the average rating from the server
  const averageRating = <%= averageRating.toFixed(1) %>
  
  // Calculate the rounded average rating
  const roundedAverageRating = calculateRoundedAverage(averageRating);
  
  // Set the checked attribute based on the rounded average rating
  const stars = document.querySelectorAll('input[name="rating-2"]');
  stars.forEach((star, index) => {
    star.checked = (index + 1) === roundedAverageRating;
  });

  stars.forEach((star) => {
    star.disabled = true;
  });
