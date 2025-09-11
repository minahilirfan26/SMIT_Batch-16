import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
console.log("user exist")
    // const uid = user.uid;
    // ...
  } else {
    console.log("user not exist")
  }
});




let signUp =()=>{

    let email = document.getElementById("email");
    let password = document.getElementById("password")

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => {
    // Signed up 
    // const user = userCredential.user;
        console.log(res.user)
        Swal.fire("Login sucessfully");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  Swal.fire({
  icon: "error",
  title: errorMessage,
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    // ..
  });

}

  let signUpBtn = document.getElementById("signUpBtn")
  signUpBtn.addEventListener("click", signUp)


  let logOut = ()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  console.log("Sign-out successful")
}).catch((error) => {
  // An error happened.
  console.log(error)
});
  }

  let signOutBtn = document.getElementById("signOutBtn")
  signOutBtn.addEventListener("click", logOut )