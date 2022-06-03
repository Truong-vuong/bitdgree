///////MobileMenu/////////
// let menuIcon = document.querySelector(".header__iconbar");
// let mobileMenu = document.querySelector(".center");
// let closeIcon = document.querySelector(".nav__header__close");

// menuIcon.addEventListener("click", function(e) {
//     mobileMenu.style.left = "0";
// });

// closeIcon.addEventListener("click", function(e) {
//     mobileMenu.style.left = "-100%";
// });

////// SubMenu////////////////
// let courses = document.querySelector(".nav__menu__main");
// let subNav = document.querySelector(".nav__menu__list");

// courses.addEventListener("click", function(e) {
//     subNav.classList.toggle("hide");
// });

/////////background header

let header = document.querySelector(".header");

window.onscroll = function() {
    if (document.documentElement.onscroll > 80 || window.pageYOffset > 80) {
        header.style.backgroundColor = "#212529";
    } else {
        header.style.backgroundColor = "transparent";
    }
};

///language tab////
let languageTab = document.querySelector(".language__tab");
let languageMenu = document.querySelector(".language__menu");

languageMenu.addEventListener("click", function(e) {
    languageTab.classList.toggle("active");
});