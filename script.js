console.log("Script Loaded");
// Navbar scroll change colour code
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Background video sound mute/unmute code
const heroVideo = document.getElementById("heroVideo");

document.getElementById("video-section").addEventListener("click", () => {
  heroVideo.muted = !heroVideo.muted;
});

// Engine button sound on/off code
const engineBtn = document.getElementById("engineBtn");
const engineSound = document.getElementById("engineSound");

let isPlaying = false;

engineBtn.addEventListener("click", () => {
  if (!isPlaying) {
    engineSound.currentTime = 0;
    engineSound.play();
    isPlaying = true;
  } else {
    engineSound.pause();
    engineSound.currentTime = 0;
    isPlaying = false;
  }
});

// Watermark appear animation
const watermark = document.querySelector(".watermark-text");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        watermark.classList.add("visible");
        observer.unobserve(watermark);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(watermark);
