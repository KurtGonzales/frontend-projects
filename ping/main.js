// selectors
const form = document.getElementById("form");
const email = document.getElementById("email");

// eventListener
form.addEventListener("submit", function(e){
    e.preventDefault();

    validate();
});


// checking the value 
function validate(){
    const emailValue = email.value.trim();

    if(emailValue === ''){
        error(email, 'Email cannot be blank');
    }else if(!emailEl(emailValue)){
       error(email, 'Not a valid email');
    }else {
        success(email);
    }
}

function error(input, message){
    const forms = input.parentElement;
    const small = forms.querySelector('small');
    forms.className = 'form error';
    small.innerText = message;
}

function success(input){
    const forms = input.parentElement;
    forms.className = 'form success';
}


function emailEl(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}