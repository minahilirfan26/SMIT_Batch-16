import { auth, createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user exists", user)
  } else {
    // User is signed out
    // ...
    console.log("user not exists")
  }
});

let signUp = ()=>{
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => {
   
    // const user = userCredential.user;
    console.log(res.user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}


let signUpBtn = document.getElementById("signUpBtn")
signUpBtn.addEventListener("click", signUp )



let logOutFun = ()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  console.log("Sign-out successful.")
}).catch((error) => {
  // An error happened.
  console.log(error)
});
}

let logOut = document.getElementById("logOut")
logOut.addEventListener("click", logOutFun)


let emailVerification = document.getElementById("emailVerification")
emailVerification.addEventListener("click", ()=>{
    sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    console.log("Email verification sent!")
    // ...
  });
})