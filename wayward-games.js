/* =========================================
   LIGHTBOX
========================================= */

const lightbox =
  document.getElementById("lightbox");

const lightboxImg =
  document.getElementById("lightbox-img");

const closeBtn =
  document.getElementById("lightbox-close");


/* =========================================
   GALLERY
========================================= */

document
  .querySelectorAll(".gallery-item")
  .forEach((item) => {

    item.addEventListener("click", () => {

      lightboxImg.src =
        item.dataset.full;

      lightboxImg.alt =
        item.querySelector("img").alt;

      lightbox.classList.add("open");

    });

  });


/* =========================================
   CLOSE LIGHTBOX
========================================= */

function closeLightbox() {

  lightbox.classList.remove("open");

  lightboxImg.src = "";
}


closeBtn.addEventListener(
  "click",
  closeLightbox
);


lightbox.addEventListener(
  "click",
  (e) => {

    if (e.target === lightbox) {
      closeLightbox();
    }

  }
);


document.addEventListener(
  "keydown",
  (e) => {

    if (e.key === "Escape") {
      closeLightbox();
    }

  }
);


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle =
  document.getElementById("theme-toggle");


/* =========================================
   APPLY THEME
========================================= */

function applyTheme(theme) {

  const isDark =
    theme === "dark";

  document.body.classList.toggle(
    "dark",
    isDark
  );


  if (isDark) {

    themeToggle.textContent = "☀️";

    themeToggle.setAttribute(
      "aria-label",
      "Switch to light mode"
    );

    themeToggle.setAttribute(
      "title",
      "Switch to light mode"
    );

  } else {

    themeToggle.textContent = "🌙";

    themeToggle.setAttribute(
      "aria-label",
      "Switch to dark mode"
    );

    themeToggle.setAttribute(
      "title",
      "Switch to dark mode"
    );
  }
}


/* =========================================
   LOAD THE SAME THEME AS PORTFOLIO
========================================= */

const savedTheme =
  localStorage.getItem("theme") || "light";

applyTheme(savedTheme);


/* =========================================
   TOGGLE THEME
========================================= */

themeToggle.addEventListener(
  "click",
  () => {

    const isDark =
      document.body.classList.contains("dark");

    const newTheme =
      isDark ? "light" : "dark";


    /*
      Save to the SAME localStorage key
      used by the main portfolio.
    */

    localStorage.setItem(
      "theme",
      newTheme
    );


    applyTheme(newTheme);

  }
);


/* =========================================
   SYNC WITH PORTFOLIO
========================================= */

window.addEventListener(
  "storage",
  (event) => {

    if (event.key === "theme") {

      const newTheme =
        event.newValue || "light";

      applyTheme(newTheme);

    }

  }
);