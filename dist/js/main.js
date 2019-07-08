let togglerElem = document.querySelector('.navbar-menu');
let menuElem = document.querySelector('.navbar-toggler');
menuElem.addEventListener("click", function () {
    togglerElem.classList.toggle('active');
});
