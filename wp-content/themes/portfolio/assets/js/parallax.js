document.addEventListener('DOMContentLoaded', function() {
    var parallaxElements = document.querySelectorAll('.wp-block-cover');
    
    function setParallaxPosition() {
        parallaxElements.forEach(function(element) {
            var scrollPosition = window.pageYOffset;
            var elementTop = element.getBoundingClientRect().top;
            var parallaxOffset = scrollPosition - elementTop;
            
            var backgroundImage = element.querySelector('img.wp-block-cover__image-background');
            if (backgroundImage) {
                backgroundImage.style.transform = 'translateY(' + parallaxOffset * 0.3 + 'px)';
            }
        });
    }
    
    setParallaxPosition();
    window.addEventListener('scroll', setParallaxPosition);
});