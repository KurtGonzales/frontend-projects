// const btns = document.querySelectorAll(".share-btn");

// btns.forEach(function (showBtn){
//   const show = showBtn.querySelector(".avatar");
//      show.addEventListener("click", function() {
//     btns.forEach(function(){
//         showBtn.classList.toggle("show-div");
//     })

//    });
//    });


const showBtns = document.querySelector(".share-btn");
const closeBtns = document.querySelector(".close-btn");
const showDiv = document.querySelector(".social-media");

showBtns.addEventListener("click", function(e){
   const showDiv = e.currentTarget.parentElement.parentElement;
    showDiv.classList.toggle("show-div");
});

closeBtns.addEventListener("click", function(e){
    const showDiv = e.currentTarget.parentElement.parentElement;
    showDiv.classList.remove("show-div");
});

