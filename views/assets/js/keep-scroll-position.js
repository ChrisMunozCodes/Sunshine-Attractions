// Get the element with the scroll container
const scrollContainer = document.querySelector('.desktop-container');

// Store the current scroll position in localStorage when scrolling
scrollContainer.addEventListener('scroll', function() {
  localStorage.setItem('scrollpos', scrollContainer.scrollTop);
});

// Get the stored scroll position from localStorage
const storedScrollPos = localStorage.getItem('scrollpos');

// Scroll to the stored position
scrollContainer.scrollTop = storedScrollPos || 0;