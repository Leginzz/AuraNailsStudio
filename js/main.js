const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.getElementById("theme-color");
const STORAGE_KEY = "aura-theme";

function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeColor) themeColor.setAttribute("content", "#0F0F0F");
    } else {
        document.body.classList.remove("dark-mode");
        if (themeColor) themeColor.setAttribute("content", "#F8F8F8");
    }
}

applyTheme(getPreferredTheme());

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark-mode");
        const newTheme = isDark ? "light" : "dark";
        applyTheme(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
    });
}

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
mediaQuery.addEventListener("change", (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? "dark" : "light");
    }
});

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Cerrar men\u00FA" : "Abrir men\u00FA");
    });
    function closeMenu() {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir men\u00FA");
    }
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
    themeToggle.addEventListener("click", closeMenu);
}
window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});
const hiddenElements = document.querySelectorAll(
    ".service-card, .stat-card, .testimonial-card, .promo-card, .section-title, .about-text"
);
hiddenElements.forEach((el) => observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(
            this.getAttribute("href")
        );
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
const yearElement = document.querySelector(".current-year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
