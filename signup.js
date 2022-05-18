function logSubmit(event){
    if (event.submitter.className == "btn1" ){
        registeredOrSignedIn.textContent  = "Registered!";
    } else {
        registeredOrSignedIn.textContent = "Signed In!";
    }
    event.preventDefault(); // avoid refreshing
}
const signupform = document.getElementById('signupform');
const registeredOrSignedIn = document.querySelector("#registeredOrSignedIn")
signupform.addEventListener("submit", logSubmit);


