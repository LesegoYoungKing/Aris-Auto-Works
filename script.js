document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('.section'); // Select all sections

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'var(--bmw-blue)';
        } else {
            header.style.backgroundColor = 'rgba(0, 102, 177, 0.9)';
        }
    });

    // Intersection Observer to reveal sections on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Make section visible when in view
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
});
