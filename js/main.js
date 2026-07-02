/* =====================================
   AURA NAILS STUDIO
   main.js
===================================== */

/* Header dinámico */

const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");

    });

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");

        });

    });

}

window.addEventListener("scroll", () => {

    header.classList.toggle("scrolled", window.scrollY > 50);

});


/* Animaciones al aparecer */

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
    ".service-card, .stat-card, .testimonial-card, .section-title, .about-text"
);

hiddenElements.forEach((el) => observer.observe(el));


/* Smooth scroll para enlaces internos */

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


/* Año automático footer */

const yearElement = document.querySelector(".current-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}



