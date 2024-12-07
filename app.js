function signUp() {
    var fullName = document.getElementById('full-Name')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    console.log(fullName.value)
    console.log(email.value)
    console.log(password.value)
    fullName.value=' '
    email.value=' '
    password.value=' '
}

function logIn() {
    var loginEmail= document.getElementById('login-email')
    var loginPassword= document.getElementById('login-Password')
    if (loginEmail.value === email.value && loginPassword.value===password.value) {
        console.log("Correct! The password you entered matches the original password.")
        // if(loginEmail.value !== email.value){
            
        //     if(loginPassword.value!== password.value){
        //         }
        //         else{
        //             console.log("Incorrect password")
        //         }

            
            
            
        // }
        // else{
        //     console.log("Incorrect Email")
        // }
    }
    else{
        console.log("Incorrect Email & Password")
    }
}