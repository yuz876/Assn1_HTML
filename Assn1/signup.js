function logSubmit(event){
    register.textContent  = "Registered!";
    signin.textContent = "Signed In!"
    event.preventDefault(); // avoid refreshing
}
const signupform = document.getElementById('signupform');
const register = document.getElementById('register');
const signin = document.getElementById('signin');
signupform.addEventListener('submit', logSubmit);


