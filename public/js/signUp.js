const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs(); //custom made func
});

function checkInputs(){
    //get the values from the inputs
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();


    if(usernameValue ===''){
        //show error
        //add error class
        setErrorFor(username,'Username cannot be blank');
    }
    else if(!isUser(usernameValue)){
        setErrorFor(username,'Username must contain only letters and digits');
    }
    else{
        //add success class
        setSuccessFor(username);
    }

    if(emailValue===''){
        setErrorFor(email,'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,'Invalid email format');
    }
    else{
        setSuccessFor(email);
    }

    if(passwordValue===''){
        setErrorFor(password,'Password cannot be blank');
    }
    else if(!isPassword(passwordValue)){
        setErrorFor(password,'Password must contain at least 8 characters');
    }
    else{
        setSuccessFor(password);

    }

    if(password2Value===''){
        setErrorFor(password2,"Password cannot be blank");
    }
    else if(passwordValue!== password2Value){
        setErrorFor(password2,'Passwords does not match');
    }
    else{
        setSuccessFor(password2);

    }

}


function setErrorFor(input,message){
    const formControl = input.parentElement;  //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'Sform-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'Sform-control success';

}

function isUser(username){
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
}

function isEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function isPassword(password){
    const regx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return regx.test(password);
}