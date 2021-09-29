// selectors
const submit = document.getElementById("form-submit");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("emailaddress");
const pass = document.getElementById("password");

// event listener
submit.addEventListener("submit", function(e){
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const firstnameValue = firstName.value.trim();
    const lastnameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();

    if(firstnameValue === ''){
        setErrorFor(firstName, "First name cannot be blank");
    }else {
        setSuccessFor(firstName);
    }
    if(lastnameValue === ''){
        setErrorFor(lastName, 'Last name cannot be blank');
    }else {
        setSuccessFor(lastName);
    }
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!emailElements(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    }else {
        setSuccessFor(email);
    }
    if(passValue.length === 0){
        setErrorFor(pass, 'Password cannot be blank');
    }else if (passValue.length <= 8){
        setErrorFor(pass, 'Password cannot be less than 8 characters');
    }else {
        setSuccessFor(pass);
    }
}

// error validation
function setErrorFor(input, message){
    const forms = input.parentElement;
    const small = forms.querySelector('small');
    forms.className = 'forms error';
    small.innerText = message;
}

// success validation
function setSuccessFor(input){
    const forms = input.parentElement;
    forms.className = 'forms success';
}

// email regex
function emailElements(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

