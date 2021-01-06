const  username = document.getElementById("username");
const  password = document.getElementById("password");
const form = document.getElementById("login-form");
const errorElement =document.getElementById("error");

form.addEventListener('submit',(e)=>{
    let messages=[]

    if(username.value==='' || username.value == null){
        messages.push('Username required !!');
    }

    if(password.value.length<8){
        messages.push('Password must be atleast longer than 8 characters! ')
    }
    if(messages.length > 0){
    e.preventDefault();
    errorElement.innerText = messages.join('');
    }

});