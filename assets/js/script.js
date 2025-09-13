const burger = document.querySelector("#home .burger");
const navbar = document.querySelector("#home .nav-on-light");

burger.addEventListener('click', function(){
    navbar.classList.toggle('open');
});