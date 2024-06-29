document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.ml-slider .slides li');

    // Détection des appareils mobiles
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        slides.forEach(slide => {
            slide.classList.add('visible');
        });
    } else {
        const observerOptions = {
            root: null, // use the viewport
            rootMargin: '0px',
            threshold: 0.1 // trigger when 10% of the slide is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(slides).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.5}s`;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // stop observing once it's visible
                }
            });
        }, observerOptions);

        slides.forEach(slide => {
            observer.observe(slide);
        });
    }
});