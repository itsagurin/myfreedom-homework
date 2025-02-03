const heroBtn = document.getElementById('heroBtn');
const popup = document.querySelector('.popup');
const popupBtn = document.getElementById('popupBtn');

heroBtn.addEventListener('click', () => {
    popup.classList.add('active');
});

popupBtn.addEventListener('click', () => {
    popup.classList.remove('active');
});

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('active');
    }
});
