// ==================== WHATSAPP INTEGRATION ====================

/**
 * Abre uma conversa no WhatsApp com uma mensagem pré-definida
 * @param {string} message - Mensagem pré-definida para enviar
 */
function openWhatsApp(message) {
    // Número do WhatsApp (formato internacional: código do país + DDD + número)
    const phoneNumber = '5519992895723'; // +55 19 99289-5723
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // URL do WhatsApp Web
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abre em nova aba
    window.open(whatsappURL, '_blank');
}

// ==================== SMOOTH SCROLL TO SERVICES ====================

function scrollToServices() {
    const servicesSection = document.getElementById('servicos');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
}

// ==================== MOBILE MENU TOGGLE ====================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Anima os spans do menu
            const spans = menuToggle.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(12px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-12px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Fecha o menu ao clicar em um link
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});

// ==================== FLIP CARD ANIMATION ====================

document.addEventListener('DOMContentLoaded', function() {
    const flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
        // Feedback visual ao interagir
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const inner = this.querySelector('.flip-card-inner');
                if (!inner.style.transform || inner.style.transform === '') {
                    inner.style.transform = 'rotateY(180deg)';
                } else {
                    inner.style.transform = '';
                }
            }
        });
    });
});

// ==================== SCROLL ANIMATIONS ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    // Observa elementos para animação
    const elementsToAnimate = document.querySelectorAll('.flip-card, .about-text, .feature');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==================== PARALLAX EFFECT (HERO SECTION) ====================

window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const scrollPosition = window.scrollY;
        heroContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ==================== SMOOTH ANCHOR LINKS ====================

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

// ==================== ADDITIONAL FEATURES ====================

console.log('%c⚙️ GL Informática - Soluções em TI', 'color: #1db954; font-size: 16px; font-weight: bold;');
