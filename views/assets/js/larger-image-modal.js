let imageIndex = 0;
let images = []; // Array to hold the image URLs

function openImageModal(imageUrl) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  images = [...document.querySelectorAll("ul.flex img")].map(img => img.getAttribute("data-image-url"));
  imageIndex = images.indexOf(imageUrl); // Set the index of the clicked image
  modalImage.src = imageUrl;
  modal.style.display = "block";
}

function showPreviousImage() {
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[imageIndex];
}

function showNextImage() {
  imageIndex = (imageIndex + 1) % images.length;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[imageIndex];
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
