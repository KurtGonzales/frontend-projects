const hamburgerToggle = document.getElementById('hamburger-toggle');
const closeBtn = document.getElementById('close');
const nav = document.getElementById('nav');

hamburgerToggle.addEventListener("click", function(){
    nav.classList.toggle('show-nav');
})

closeBtn.addEventListener("click", function(){
    nav.classList.toggle('show-nav');
})