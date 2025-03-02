// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll("#mobile-menu a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Slider functionality
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentSlide = 0;
const totalSlides = 3; // Total number of slides

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.addEventListener("click", function () {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

nextBtn.addEventListener("click", function () {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      });
    }
  });
});
