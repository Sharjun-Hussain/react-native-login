// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAodfvRLgk9lEoha-G4cah7h8rQ0OjqQB4",
  authDomain: "inzeedo-mobile-app.firebaseapp.com",
  projectId: "inzeedo-mobile-app",
  storageBucket: "inzeedo-mobile-app.appspot.com",
  messagingSenderId: "723877560393",
  appId: "1:723877560393:web:8d77ec07abb186aa9bff98"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);