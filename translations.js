


let currentLang = localStorage.getItem('kizombaLang') || 'es';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('kizombaLang', lang);

    // Oversæt alle data-i18n elementer
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; 
        }
    });

    // Skift billedet på flagene
    document.querySelectorAll('.lang-flag-img').forEach(img => {
        // Viser det britiske flag, hvis vi er på spansk (for at skifte til engelsk)
        // Viser det spanske flag, hvis vi er på engelsk (for at skifte til spansk)
        img.src = lang === 'es' ? 'https://flagcdn.com/w40/gb.png' : 'https://flagcdn.com/w40/es.png';
    });
}

function toggleLanguage() {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});