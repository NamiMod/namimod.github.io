// Buttons link to other pages
document.getElementById("resumeBtn").addEventListener("click", () => {
  window.location.href = "resume.html";
});
document.getElementById("projectsBtn").addEventListener("click", () => {
  window.location.href = "projects.html";
});

// Burger menu toggle
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector("nav.mobile");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});