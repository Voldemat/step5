document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    const logo = document.querySelector(".header__logo");
    const headerBurgerElement = document.querySelector(".header__burger");
    headerBurgerElement.addEventListener("click", function(event){
        document.querySelector(".header__menu").classList.toggle("active");
        body.classList.toggle("block-scroll");
        headerBurgerElement.classList.toggle("active");
        logo.classList.toggle("active");
    });
});