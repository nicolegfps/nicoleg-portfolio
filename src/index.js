// Floating Animation
const container = document.getElementById("floating-container");
if (container) {
  let startTime;

  function animate(time) {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    const amplitude = 10;
    const frequency = 0.0008;
    const offset = Math.sin(elapsed * frequency) * amplitude;

    container.style.transform = `translateY(${offset}px)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// Text Animation on Scroll
const sections = document.querySelectorAll(".text-ani-1, .text-ani-2");
function updateAnimation() {
  const scrollTop = window.scrollY;
  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop;
    const sectionHeight = sec.offsetHeight;
    const windowHeight = window.innerHeight;
    let scrollProgress =
      (scrollTop - sectionTop + windowHeight) / (sectionHeight + windowHeight);
    scrollProgress = Math.max(0, Math.min(1, scrollProgress));

    const isLeftAnimation = sec.classList.contains("text-ani-1");
    const translateX = scrollProgress * (isLeftAnimation ? -30 : 30);

    sec.querySelectorAll(".animate").forEach((el) => {
      el.style.transform = `translateX(${translateX}%)`;
    });
  });
}

window.addEventListener("scroll", () => {
  if (Math.abs(window.scrollY - (window.lastScrollTop || 0)) > 10) {
    updateAnimation();
    window.lastScrollTop = window.scrollY;
  }
});
updateAnimation();

// Smooth Scrolling with Lenis
if (typeof Lenis !== "undefined") {
  const lenis = new Lenis({
    duration: 2.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY;
      lenis.scrollTo(targetPosition);
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      smoothScroll(target);
    });
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

// Text Reveal on Scroll for "About Me" Section
document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".reveal-text");

  function handleScroll() {
    revealElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        element.classList.add("revealed");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on load
});

// Helper Function to Wrap Each Word in a Span Tag
function wrapWords(element) {
  const text = element.textContent.trim();
  const words = text
    .split(" ")
    .map((word) => `<span class="word">${word}</span>`);
  element.innerHTML = words.join(" ");
}

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const hoverElements = document.querySelectorAll(".hover-this"); // All elements with hover effect

  // Update cursor position
  const moveCursor = (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  };

  // Cursor scaling and color change on hover
  hoverElements.forEach((link) => {
    link.addEventListener("mouseover", () => {
      cursor.classList.add("hovered"); // Add hovered class for scaling and color change
      link.style.color = "white"; // Change the text color to white
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("hovered"); // Remove hovered class
      link.style.color = ""; // Reset text color to default
    });
  });

  // Attach the mousemove event to update cursor position
  window.addEventListener("mousemove", moveCursor);
});

// Function to scroll back to the top smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Enables smooth scrolling
  });
}

// Show or hide the "Back to Top" button based on scroll position
const scrollTopButton = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Show button after scrolling 200px
    scrollTopButton.style.opacity = "1";
    scrollTopButton.style.pointerEvents = "auto"; // Allow interaction
  } else {
    scrollTopButton.style.opacity = "0";
    scrollTopButton.style.pointerEvents = "none"; // Prevent interaction
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".reveal-text");

  function handleScroll() {
    revealElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        element.classList.add("revealed");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on load
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperPortrait = new Swiper(".mySwiperPortrait", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

