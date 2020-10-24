const menuIcon = document.querySelector('.hamburguer-container');
const menuContainer = document.querySelector('.menu-container');
const bodyContainer = document.querySelector('.b-container');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("change");
    menuContainer.classList.toggle("menu-appear");
    bodyContainer.classList.toggle("overflow");
});