// change-filter-heading.js

document.addEventListener("DOMContentLoaded", function() {
    const filterLinks = document.querySelectorAll("#filter-link");
    const reviewsHeading = document.getElementById("reviewsHeading");
  
    // Retrieve the selected filter from localStorage on page load
    const storedFilter = localStorage.getItem("selectedFilter");
    if (storedFilter) {
      reviewsHeading.textContent = storedFilter;
    }
  
    filterLinks.forEach(link => {
      link.addEventListener("click", function() {
        const filterText = this.textContent;
        reviewsHeading.textContent = filterText; // Update the heading text
  
        // Store the selected filter in localStorage
        localStorage.setItem("selectedFilter", filterText);
      });
    });
  });
  