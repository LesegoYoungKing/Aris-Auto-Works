 document.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('.header');
            const sections = document.querySelectorAll('.section');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.style.backgroundColor = 'var(--bmw-blue)';
                } else {
                    header.style.backgroundColor = 'rgba(0, 102, 177, 0.9)';
                }
            });

            const options = {
                root: null,
                threshold: 0.1,
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, options);

            sections.forEach(section => {
                observer.observe(section);
            });
        });
