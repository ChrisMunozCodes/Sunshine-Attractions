const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

console.log('Screen Width:', screenWidth);
console.log('Screen Height:', screenHeight);

const aspectRatio = screenWidth / screenHeight;
console.log('Aspect Ratio:', aspectRatio);

const isDesktop = aspectRatio > 1;
console.log('isDesktop:', isDesktop);