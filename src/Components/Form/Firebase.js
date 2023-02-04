// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
initializeApp({
  apiKey: "AIzaSyAmXUmT1ohZ2gAzUkGY2Rx6VTpddijPvjY",
  authDomain: "app-rest-bbbe4.firebaseapp.com",
  projectId: "app-rest-bbbe4",
  storageBucket: "app-rest-bbbe4.appspot.com",
  messagingSenderId: "639945541357",
  appId: "1:639945541357:web:0c6505b7436f8b4472aee4"
});

// Initialize Firebase

export const db = getFirestore()