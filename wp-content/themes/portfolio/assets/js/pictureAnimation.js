document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.alignright img');
    
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        images.forEach(function (img) {
            if (isElementInViewport(img) && !img.classList.contains('swirl-in-animation')) {
                setTimeout(function() {
                    img.classList.add('swirl-in-animation');
                }, 100); // Délai de 100ms avant de démarrer l'animation
            }
        });
    }

    // Écoute des événements de défilement et de redimensionnement
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Vérification initiale au chargement de la page
    checkVisibility();
});