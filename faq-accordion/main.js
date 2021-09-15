const question = document.querySelectorAll(".questions");

question.forEach(function (questions) {
   const btn = questions.querySelector(".btn-show");
   btn.addEventListener("click", function(){
       question.forEach(function(item){
           if(item !== question){
            item.classList.remove("show-answer");
           }
       });

       questions.classList.toggle("show-answer");
   });
});
