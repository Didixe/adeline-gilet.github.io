// Sélectionner tous les liens contenant des images dans MetaSlider
const slideLinks = document.querySelectorAll('#metaslider_108 .slides a');

// Parcourir chaque lien et copier l'attribut title de l'image
slideLinks.forEach(link => {
    const img = link.querySelector('img'); // Sélectionner l'image à l'intérieur du lien
    if (img) {
        const title = img.getAttribute('title'); // Récupérer l'attribut title de l'image
        if (title) {
            link.setAttribute('data-image-title', title); // Définir un nouvel attribut data-image-title sur le lien
        }
    }
});