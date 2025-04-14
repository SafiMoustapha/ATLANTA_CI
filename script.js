let isClicked = false;
const img = document.getElementById('menuImage');
const hoverImg = document.getElementById('hoverImage');
const menu = document.getElementById('sideMenu');
const menuToggle = document.getElementById('menuToggle');

function showHoverImage() {
    if (!isClicked) {
        img.src = './images/menu (3).png';
        img.style.width = '1.25rem';
    }
}

function resetImage() {
    if (!isClicked) {
        document.getElementById('menuImage').src = './images/menu (4).png';
    }
}

function changeImage() {
    
    if (!isClicked) {
        img.src = './images/croix.png';
        img.style.borderRadius = '10%';
        menuToggle.style.border = '1px solid #497b9c';
        menuToggle.style.borderRadius = '10%';
        menu.style.display = 'block';
        menu.classList.add('slide-out');
        isClicked = true;
    } else {
        img.src = './images/menu (4).png';
        menuToggle.style.border = 'none'; // <- Pour retirer la bordure à la fermeture
        menu.style.display = 'none';
        isClicked = false;
    }
}
