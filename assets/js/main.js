// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("show");
    }
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}


// --- Video banner carousel ---
const videoElement = document.getElementById("walkthroughVideo");
const videoTitleEl = document.getElementById("videoTitle");
const videoDescEl = document.getElementById("videoDescription");
const prevBtn = document.getElementById("videoPrev");
const nextBtn = document.getElementById("videoNext");

// Only run if the section exists on this page
if (videoElement && videoTitleEl && videoDescEl && prevBtn && nextBtn) {
  const videoSlides = [
    {
      src: "assets/video/outsideview.mp4",
      title: "Virtual walk – outside & lobby",
      desc: "A quick walk from Street Mall’s corridor into the main lobby entrance of Mya Event Place."
    },
    {
      src: "assets/video/mainlobby.mp4",
      title: "Main lobby walkthrough",
      desc: "See the lobby space where guests first arrive and register for your event."
    },
    {
      src: "assets/video/outsidehallway.mp4",
      title: "Covered walkway & hall access",
      desc: "Covered walkway leading guests comfortably towards the hall entrance."
    },
    {
      src: "assets/video/outsideview2.mp4",
      title: "Street Mall ambience",
      desc: "General ambience around Street Mall, showing the surrounding shops and atmosphere."
    },
    {
      src: "assets/video/pondbesidehallpan.mp4",
      title: "Pondside panorama",
      desc: "Panoramic view of the pond beside the hall – a lovely spot for photos and breakout moments."
    },
    {
      src: "assets/video/parkingarea2.mp4",
      title: "Parking access route",
      desc: "Sample driving / walking route from the parking area towards the hall zone."
    }
  ];

  let currentVideoIndex = 0;

  function loadVideo(index, autoplay = true) {
    if (index < 0) index = videoSlides.length - 1;
    if (index >= videoSlides.length) index = 0;

    const slide = videoSlides[index];
    currentVideoIndex = index;

    videoElement.src = slide.src;
    videoTitleEl.textContent = slide.title;
    videoDescEl.textContent = slide.desc;

    // autoplay, but ignore any play() errors (e.g. browser not allowing it)
    if (autoplay) {
      videoElement
        .play()
        .catch(() => {
          // user will have to click play manually – that's fine
        });
    }
  }

  // Initial load
  loadVideo(0, false);

  // Next / prev buttons
  prevBtn.addEventListener("click", () => {
    loadVideo(currentVideoIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    loadVideo(currentVideoIndex + 1);
  });

  // Auto-play next when one video ends
  videoElement.addEventListener("ended", () => {
    loadVideo(currentVideoIndex + 1);
  });
}

// --- Moments Carousel ---
const momentsTrack = document.getElementById("momentsTrack");
const momentsPrev = document.getElementById("momentsPrev");
const momentsNext = document.getElementById("momentsNext");

if (momentsTrack && momentsPrev && momentsNext) {
  let momentsIndex = 0;
  const momentSlides = document.querySelectorAll(".moments-slide");

  function updateMomentsCarousel() {
    const offset = momentsIndex * -86; // percentage shift
    momentsTrack.style.transform = `translateX(${offset}%)`;
  }

  momentsPrev.addEventListener("click", () => {
    momentsIndex = Math.max(0, momentsIndex - 1);
    updateMomentsCarousel();
  });

  momentsNext.addEventListener("click", () => {
    momentsIndex = Math.min(momentSlides.length - 1, momentsIndex + 1);
    updateMomentsCarousel();
  });
}
