const video = document.querySelector('.video-bg');

video.addEventListener('ended', () => {
  video.classList.remove('video-bg');
});

