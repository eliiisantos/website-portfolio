/* =========================================
   LIGHTBOX
========================================= */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImg.src = item.dataset.full;
    lightboxImg.alt = item.querySelector("img").alt;
    lightbox.classList.add("open");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxImg.src = "";
}

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

/* =========================================
   BACK TO PORTFOLIO — close tab if opened
   as a new tab, otherwise navigate normally
========================================= */
const backLink = document.getElementById("back-link");
backLink.addEventListener("click", (e) => {
  if (window.opener) {
    e.preventDefault();
    window.close();
  }
});

/* =========================================
   DARK / LIGHT MODE — synced with portfolio
========================================= */
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);

  if (isDark) {
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
    themeToggle.setAttribute("title", "Switch to light mode");
  } else {
    themeToggle.textContent = "🌙";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
    themeToggle.setAttribute("title", "Switch to dark mode");
  }
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});

window.addEventListener("storage", (event) => {
  if (event.key === "theme") {
    applyTheme(event.newValue || "light");
  }
});