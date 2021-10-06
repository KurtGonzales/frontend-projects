const toggle = document.querySelector('.hamburger-toggle');
const navLinks = document.querySelector('.nav-items');

toggle.addEventListener("click", function(){
    navLinks.classList.toggle('show-nav');
});