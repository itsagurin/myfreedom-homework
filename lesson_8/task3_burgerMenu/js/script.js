const burgerBtn = document.getElementById('burgerBtn');
const closeBtn = document.getElementById('closeBtn');
const sideMenu = document.getElementById('sideMenu');
const mainContent = document.getElementById('mainContent');

burgerBtn.addEventListener('click', () => {
    sideMenu.style.width = "250px";
    mainContent.style.marginLeft = "250px";
    burgerBtn.style.display = "none";
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.width = "0";
    mainContent.style.marginLeft = "0";
    burgerBtn.style.display = "block";
});
