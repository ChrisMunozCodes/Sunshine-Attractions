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