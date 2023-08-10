document.getElementById('submitButton').addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the loading spinner element
    const loadingSpinner = document.querySelector('.loading-spinner');
    
    // Get the submit button element
    const submitButton = document.getElementById('submitButton');
    
    // Show the loading spinner and hide the submit button
    loadingSpinner.classList.remove('hidden');
    submitButton.classList.add('hidden');
    
    // Simulate an HTTP request (replace this with your actual HTTP request)
    setTimeout(function() {
      // Hide the loading spinner and show the submit button
      loadingSpinner.classList.add('hidden');
      submitButton.classList.remove('hidden');
      
      // Submit the form programmatically
      event.target.closest('form').submit();
    }, 4000); // Simulate a 4-second delay
});