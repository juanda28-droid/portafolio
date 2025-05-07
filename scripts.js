// Inicializar AOS (Animate On Scroll), si está disponible
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}
 
// Efecto de escritura para el nombre
const typingName = document.getElementById('typingName');
const nameText = 'Juan David Roncancio';
let index = 0;

function typeName() {
    if (index < nameText.length) {
        typingName.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeName, 100);
    }
}
window.addEventListener('load', typeName);

// Modo Oscuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Cargar el tema guardado
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } 
}); 


// Botón Volver Arriba con animación mejorada
const scrollTopBtn = document.querySelector('.scroll-top-btn');
window.addEventListener('scroll', () => { 
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible'); 
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cambio de color del header al hacer scroll
const headerContent = document.querySelector('.header-content');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerContent.classList.add('header-scrolled');
    } else {
        headerContent.classList.remove('header-scrolled');
    }
});

// Scroll suave para enlaces internos (si se añaden en el futuro)
document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' 
            });
        }
    });
});  





