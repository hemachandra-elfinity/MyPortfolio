// Simple contact form handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.textContent = 'Thank you for your message!';
        formMessage.style.color = '#00b894';
        contactForm.reset();
    });
} 