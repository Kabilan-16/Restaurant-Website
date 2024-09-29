// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtXmmgRb9mG8v71vyecJ-CUTN97rN2LVQ",
  authDomain: "foodi-client-part-8a6cd.firebaseapp.com",
  projectId: "foodi-client-part-8a6cd",
  storageBucket: "foodi-client-part-8a6cd.appspot.com",
  messagingSenderId: "291969286288",
  appId: "1:291969286288:web:b3443689465d7a24189815"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;