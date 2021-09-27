// selectors
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const images = document.querySelector(".slide-container").children;
const totalImgs = images.length;
let counter = 0;

// eventlisteners
prevBtn.addEventListener("click", function () {
  slider("next");
});

nextBtn.addEventListener("click", function () {
  slider("prev");
});

// slide function
function slider(nextPrev) {
  if (nextPrev == "next") {
    counter++;
    if (counter == totalImgs) {
      counter = 0;
    }
  } else {
    if (counter == 0) {
      counter = totalImgs - 1;
    } else {
      counter--;
    }
  }
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("main");
  }
  images[counter].classList.add("main");
}
