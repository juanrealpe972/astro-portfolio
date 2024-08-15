import i18n from '../data/i18n'

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