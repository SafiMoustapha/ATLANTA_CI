let isClicked = false;

function showHoverImage() {
    if (!isClicked) {
        document.getElementById('menuImage').classList.add('opacity-0');
        document.getElementById('hoverImage').classList.remove('opacity-0');
    }
}

function resetImage() {
    if (!isClicked) {
        document.getElementById('menuImage').classList.remove('opacity-0');
        document.getElementById('hoverImage').classList.add('opacity-0');
    }
}

function changeImage() {
    const img = document.getElementById('menuImage');
    const hoverImg = document.getElementById('hoverImage');

    if (!isClicked) {
        img.src = './images/croix.png'; // Image après clic
        hoverImg.classList.add('hidden'); // Masquer l’image de survol après clic
        isClicked = true;
    } else {
        img.src = './images/menu (4).png'; // Retour à l’image initiale
        hoverImg.classList.remove('hidden');
        isClicked = false;
    }
}
