const openToggle = document.getElementById('hamburger-toggle');
const nav = document.getElementById('nav-links');

openToggle.addEventListener("click", function(){
    nav.classList.toggle('show-nav');
})