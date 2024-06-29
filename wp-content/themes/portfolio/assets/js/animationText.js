// Sélectionnez les éléments à animer
const h1 = document.querySelector('.fusion');
const span = document.querySelector('.qui-suis-je');

const halfWidthH1 = h1.offsetWidth / 2;
const halfWidthSpan = span.offsetWidth / 2;
const h1Offset = 30;
const h1VerticalOffset = -10;

// Variable pour stocker l'état actuel de l'animation
let animationInProgress = false;



// Fonction pour détecter la taille de l'écran et ajuster les valeurs en conséquence
function adjustForMobile() {
    const screenWidth = window.innerWidth;

    // Exemple d'ajustements pour les tailles d'écran spécifiques
    if (screenWidth <= 768) {
        h1Offset = 20; // Ajustement pour les petits écrans
        h1VerticalOffset = -5; // Ajustement pour les petits écrans
    } else {
        h1Offset = 30; // Valeur par défaut pour les grands écrans
        h1VerticalOffset = -10; // Valeur par défaut pour les grands écrans
    }
}



// Fonction pour animer les éléments
function animateElements() {
    // Définir animationInProgress sur true pour indiquer que l'animation est en cours
    animationInProgress = true;

    h1.style.transform = `translate(calc(50vw - ${halfWidthH1 + h1Offset}px), ${h1VerticalOffset}px)`;
    h1.style.transition = 'transform 3s ease'; // Animation de 3 seconde avec une transition de type ease

    span.style.transform = `translateX(calc(-50vw + ${halfWidthSpan}px))`;
    span.style.transition = 'transform 3s ease'; // Animation de 3 seconde avec une transition de type ease
}

// Fonction pour annuler l'animation
function resetAnimation() {

    h1.style.transform = `translate(calc(-50vw + ${halfWidthH1 + h1Offset}px), ${h1VerticalOffset}px)`;
    h1.style.transition = 'transform 3s ease'; // Animation de 1 seconde avec une transition de type ease

    span.style.transform = `translateX(calc(50vw - ${halfWidthSpan}px))`;
    span.style.transition = 'transform 3s ease'; // Animation de 1 seconde avec une transition de type ease


    // animationInProgress = false; // Animation terminée

    // Réinitialisation de l'animation pour centrage de .qui-suis-je
    setTimeout(() => {
        span.style.transform = 'translateX(-50%)'; // Centrage horizontal de .qui-suis-je
        span.style.transition = 'transform 1s ease'; // Transition plus courte pour recentrer
    }, 3000); // Attendre la fin de l'animation principale (3 secondes) avant de recentrer
}

// Fonction pour détecter le défilement
window.addEventListener('scroll', () => {
    const secondPart = document.querySelector('#secondPart');
    const rect = secondPart.getBoundingClientRect();

    // Si le haut de la seconde partie est visible dans la fenêtre
    if (rect.top <= window.innerHeight * 0.90 && !animationInProgress) {
        animateElements();
    } else if (window.scrollY < 101 && animationInProgress) { // Si l'utilisateur fait défiler vers le haut et que l'animation est en cours
        resetAnimation(); // Réinitialiser l'animation
    }
});


// Exécutez la fonction une fois lors du chargement de la page (au cas où la seconde partie soit déjà visible au chargement)
window.addEventListener('load', adjustForMobile);
window.addEventListener('resize', adjustForMobile);
window.addEventListener('load', animateElements);

