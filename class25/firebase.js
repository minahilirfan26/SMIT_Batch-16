  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBdtqcXFstqnKypoGalusaWPeiqzq6VJjc",
    authDomain: "batch-16-d5fb8.firebaseapp.com",
    projectId: "batch-16-d5fb8",
    storageBucket: "batch-16-d5fb8.firebasestorage.app",
    messagingSenderId: "697495226017",
    appId: "1:697495226017:web:f7e34c74b6842b899c92e0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {auth, createUserWithEmailAndPassword, onAuthStateChanged , signInWithEmailAndPassword, signOut, sendEmailVerification}