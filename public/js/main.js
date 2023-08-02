const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

console.log('Screen Width:', screenWidth);
console.log('Screen Height:', screenHeight);

const aspectRatio = screenWidth / screenHeight;
console.log('Aspect Ratio:', aspectRatio);

const isDesktop = aspectRatio > 1;
console.log('isDesktop:', isDesktop);

// Send the isDesktop value to the server or use it directly in your client-side code

// Set a cookie indicating the device type
document.cookie = `isDesktop=${isDesktop}`;

// Alternatively, store the value in local storage
localStorage.setItem('isDesktop', isDesktop);


// Get a reference to the close button and the modal dialog
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('my_modal_3');

// Add the event listener to close the modal when the button is clicked
closeModalBtn.addEventListener('click', () => {
  modal.removeAttribute('open'); // This will close the dialog
});