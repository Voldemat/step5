const headerMenu = () => {
    const body = document.querySelector("body");
    const logo = document.querySelector(".header__logo");
    const headerBurgerElement = document.querySelector(".header__burger");
    headerBurgerElement.addEventListener("click", function(event){
        document.querySelector(".header__menu").classList.toggle("active");
        body.classList.toggle("block-scroll");
        headerBurgerElement.classList.toggle("active");
        logo.classList.toggle("active");
    });
}

const productSlider = () => {
    /**
     * @type {Swiper} 
     */
    const slider = new Swiper(".swiper-1", {
        slidesPerView:1,
        scrollbar:{
            el:".swiper-scrollbar-1",
            draggable: true,
            dragClass:"product-slider__drag-line",
            dragSize:"auto",
        },
        breakpoints: {
            // when window width is >= 320px
            767: {
                slidesPerView: 2,
            },
            1200:{
                slidesPerView:3
            }
           },
    });
    const slider2 = new Swiper(".swiper-2", {
        slidesPerView:1,
        scrollbar:{
            el:".swiper-scrollbar-2",
            draggable: true,
            dragClass:"product-slider__drag-line",
            dragSize:"auto",
        },
        breakpoints: {
            // when window width is >= 320px
            767: {
                slidesPerView: 2,
            },
            1200:{
                slidesPerView:3
            }
           },
    });
    
    window.slider = slider;
    window.slider2 = slider2;
}

document.addEventListener("DOMContentLoaded", function() {
    headerMenu();
    productSlider();
});