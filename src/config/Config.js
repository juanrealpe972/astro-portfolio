import i18n from '../data/i18n'

// DarkMode >-----------------------------------------------------------------------------<
let themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
let themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if ( localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) ) {
    themeToggleLightIcon.classList.remove("hidden");
    document.documentElement.classList.add("dark");
} else {
    themeToggleDarkIcon.classList.remove("hidden");
    document.documentElement.classList.remove("dark");
}

document.getElementById("theme-toggle").addEventListener("click", function () {
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
    }
});

// Movil Toggle >------------------------------------------------------------------------------<
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuClose = document.getElementById("menu-close");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
});

menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
});

// Languages >------------------------------------------------------------------------------<
function updateContent() {
    document.querySelector('[data-translate="description"]').textContent = i18n.t('description');
    document.querySelector('[data-translate="about"]').textContent = i18n.t('about');
}

function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    updateContent();
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'es';
    i18n.changeLanguage(savedLang);
    updateContent();
});

document.getElementById('language-toggle').addEventListener('click', () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
});