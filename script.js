// Menu mobile toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Scroll suave para contato
function scrollToContact() {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
}
