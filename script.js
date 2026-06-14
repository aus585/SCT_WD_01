  <!-- navbar scroll chnage colour code  -->
      const navbar = document.getElementById("navbar");
      const body = document.body;
      window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      });
      window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      });

    <!-- background video sound mute/unmute code -->
    <script>
      const heroVideo = document.getElementById("heroVideo");

      document.getElementById("video-section").addEventListener("click", () => {
        if (heroVideo.muted) {
          heroVideo.muted = false;
        } else {
          heroVideo.muted = true;
        }
      });

    <!-- engine button (sound on and off code) -->
      const engineBtn = document.getElementById("engineBtn");
      const engineSound = document.getElementById("engineSound");

      let isPlaying = false;

      engineBtn.addEventListener("click", () => {
        if (!isPlaying) {
          engineSound.currentTime = 0; // rewind to start
          engineSound.play();
          isPlaying = true;
        } else {
          engineSound.pause();
          engineSound.currentTime = 0; // stop and reset
          isPlaying = false;
        }
      });

    <!-- watermark apper code -->
    <script>
      const watermark = document.querySelector(".watermark-text");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              watermark.classList.add("visible");
              observer.unobserve(watermark); // Only animate once
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of the section is visible
        }
      );
      observer.observe(watermark);
