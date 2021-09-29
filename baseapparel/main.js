// selector
const submit = document.getElementById("form");
const email = document.getElementById("email");

submit.addEventListener("submit",function(e){
    e.preventDefault();

    validation();
})

// validation
function validation(){
    const emailValue = email.value.trim();

    if(emailValue === ''){
        error(email, 'Email cannot be blank');
    }else if(!emailElements(emailValue)){
        error(email, 'Not a valid email');
    }else{
        success(email);
    }
}

// error message
function error(input, message){
    const form = input.parentElement;
    const small = form.querySelector("small");
    form.className = "form error";
    small.innerText = message;
}

// success input
function success(input){
    const form = input.parentElement;
    form.className = "form success";
}

// email regex
function emailElements(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}