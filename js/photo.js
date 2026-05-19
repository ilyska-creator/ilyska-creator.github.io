const mainPhoto = document.querySelector('.main-photo img');
const thumbs = document.querySelectorAll('.photo-list img');

if (mainPhoto && thumbs.length) {
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainPhoto.src = thumb.src;
            thumbs.forEach(t => t.classList.remove('active-thumb'));
            thumb.classList.add('active-thumb');
        });
    });
}