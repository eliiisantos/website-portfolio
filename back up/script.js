/* TECH STACK INFORMATION */

const techInfo = {
  html: {
    name: "HTML",
    text: "The markup language that structures every web page — headings, paragraphs, links, forms, images.",
  },

  css: {
    name: "CSS",
    text: "Controls layout, color, spacing, and responsiveness — everything about how this page looks.",
  },

  js: {
    name: "JavaScript",
    text: "Adds interactivity and logic to a page. The sidebar navigation, theme toggle, and expanding tiles use JavaScript.",
  },

  python: {
    name: "Python",
    text: "A general-purpose language known for readable syntax. Common for backend services, scripting, and automation.",
  },

  java: {
    name: "Java",
    text: "An object-oriented language widely used in enterprise backend systems and application development.",
  },

  csharp: {
    name: "C#",
    text: "A modern, object-oriented language from Microsoft — widely used for Windows desktop apps, game development with Unity, and enterprise backend systems.",
  },

  react: {
    name: "React",
    text: "A JavaScript library for building user interfaces out of reusable components.",
  },

  github: {
    name: "GitHub",
    text: "A platform for hosting Git repositories, collaborating on software projects, tracking changes, and managing source code.",
  },

  mssql: {
    name: "MSSQL",
    text: "Microsoft SQL Server — a relational database used to store and query structured, table-based data.",
  },

    mysql: {
    name: "MYSQL",
    text: "MySQL – A relational database system used to store, organize, and manage structured application data.",
  },

  oracle: {
    name: "Oracle DB",
    text: "An enterprise-grade relational database built for large, high-reliability business systems.",
  },

  mongodb: {
    name: "MongoDB",
    text: "A NoSQL document database storing flexible, JSON-like records instead of fixed tables.",
  },
};

/* NAVIGATION */

const navItems = document.querySelectorAll(".nav-item");
const views = document.querySelectorAll(".view");

function showView(name) {
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === name);
  });

  views.forEach((view) => {
    view.classList.toggle("active", view.id === "view-" + name);
  });
}

/* SIDEBAR NAVIGATION */

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    showView(item.dataset.view);
  });
});

/* HOME QUICK LINKS */

document.querySelectorAll("[data-goto]").forEach((element) => {
  element.addEventListener("click", () => {
    showView(element.dataset.goto);
  });
});

/* TECH STACK TILES */

const infoPanel = document.getElementById("info-panel");

document.querySelectorAll(".tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    document.querySelectorAll(".tile").forEach((item) => {
      item.classList.remove("selected");
    });

    tile.classList.add("selected");

    const key = tile.dataset.info;
    const info = techInfo[key];

    const icon = tile.querySelector("i");

    const iconHTML = icon ? icon.outerHTML : "";

    infoPanel.innerHTML = `
        <h3>
          ${iconHTML}
          ${info.name}
        </h3>

        <p>
          ${info.text}
        </p>
      `;
  });
});

/* PROJECT DISCLOSURES */

document.querySelectorAll(".disclosure-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const row = trigger.closest(".disclosure-row");

    row.classList.toggle("open");
  });
});

/* THEME */

const themeToggle = document.getElementById("theme-toggle");

/* APPLY THEME */

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

/* LOAD SAVED THEME*/

const savedTheme = localStorage.getItem("theme") || "light";

applyTheme(savedTheme);

/* TOGGLE THEME*/

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");

  const newTheme = isDark ? "light" : "dark";

  localStorage.setItem("theme", newTheme);

  applyTheme(newTheme);
});

/* SYNC THEME WITH OTHER WINDOWS / TABS*/

window.addEventListener("storage", (event) => {
  if (event.key === "theme") {
    const newTheme = event.newValue || "light";

    applyTheme(newTheme);
  }
});

/* COPY EMAIL TO CLIPBOARD */

const copyEmailBtn = document.getElementById("copy-email-btn");

if (copyEmailBtn) {
  const copyEmailText = document.getElementById("copy-email-text");
  const originalEmail = copyEmailText.textContent;

  copyEmailBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(copyEmailBtn.dataset.email).then(() => {
      copyEmailText.textContent = "Copied!";
      copyEmailBtn.classList.add("copied");

      setTimeout(() => {
        copyEmailText.textContent = originalEmail;
        copyEmailBtn.classList.remove("copied");
      }, 1500);
    });
  });
}
// ========================================
// LIFE OUTSIDE THE COMPUTER DROPDOWN
// ========================================

const lifeToggle = document.getElementById("lifeToggle");
const lifeContent = document.getElementById("lifeContent");
const lifeArrow = document.getElementById("lifeArrow");

lifeToggle.addEventListener("click", () => {
  lifeContent.classList.toggle("active");
  lifeToggle.classList.toggle("active");
});
