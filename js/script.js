const menuIcon = document.querySelector('.hamburguer-container');
const menuContainer = document.querySelector('.menu-container');
const bodyContainer = document.querySelector('.b-container');
const bodyContentContainer = document.querySelector('.body-content-container')
const loadScreen = document.querySelector('.loading-page-container');
const boxesInLoad = document.querySelector('.boxes')
const loadingContent = document.querySelector('.loading-content');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("change");
    menuContainer.classList.toggle("menu-appear");
    bodyContainer.classList.toggle("overflow");
});

window.addEventListener('load', () => {
    boxesInLoad.classList.remove("boxes-loading");
    bodyContainer.classList.remove("onload-size");
    loadingContent.style.display = "none";
    loadScreen.style.zIndex = "0";
    loadScreen.style.opacity = "0";
    bodyContentContainer.style.display = "flex";
});