const nav = document.getElementById('nav-links');
const openNav = document.getElementById('hamburger');
const closeNav = document.getElementById('close');

openNav.addEventListener("click", function(){
    nav.classList.toggle('show-nav');
})