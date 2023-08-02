// Make sure this code is included only once in your JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the close button and the modal dialog
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('my_modal_3');
  
    // Add the event listener to close the modal when the button is clicked
    closeModalBtn.addEventListener('click', () => {
      modal.close(); // This will close the dialog
    });
  });