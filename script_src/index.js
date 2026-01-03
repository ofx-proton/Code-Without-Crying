// Initialize the required DOM elements
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const bgOverlay = document.querySelector(".overlay");

// Toggle navbar menu
const toggleNavbarMenu = () => {
   navbarMenu.classList.toggle("is-active");
   burgerMenu.classList.toggle("is-active");
   bgOverlay.classList.toggle("is-active");
};

// Burger click
burgerMenu.addEventListener("click", () => {
   toggleNavbarMenu();
});

// Overlay click
bgOverlay.addEventListener("click", () => {
   toggleNavbarMenu();
});

// Close menu when any menu area is clicked
document.querySelectorAll(".menu").forEach((link) => {
   link.addEventListener("click", () => {
      toggleNavbarMenu();
   });
});

// Header background on scroll
window.addEventListener("scroll", () => {
   if (window.scrollY >= 75) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fix menu state on resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
         burgerMenu.classList.remove("is-active");
         bgOverlay.classList.remove("is-active");
      }
   }
});
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("is-active");
    burgerMenu.classList.remove("is-active");
    bgOverlay.classList.remove("is-active");
  });
});
