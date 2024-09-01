const flexImage = document.getElementById('flexImage');

function addHoverEffect() {
    flexImage.style.transform = 'scale(1.1)';
    flexImage.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
}

function removeHoverEffect() {
    flexImage.style.transform = 'scale(1)';
    flexImage.style.boxShadow = 'none';
}

flexImage.addEventListener('mouseenter, addHoverEffect');
flexImage.addEventListener('mouseleave, removeHoverEffect');