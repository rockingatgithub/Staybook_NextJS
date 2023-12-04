import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";



// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDGgemt7XDmk4yQpa0QnQ16ghw2djCqMKs",
    authDomain: "staybook-d4b64.firebaseapp.com",
    projectId: "staybook-d4b64",
    storageBucket: "staybook-d4b64.appspot.com",
    messagingSenderId: "136645252056",
    appId: "1:136645252056:web:d425de7fdf2c73cb6258ad",
    measurementId: "G-7L8SSMZWT0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// const analytics = getAnalytics(app);