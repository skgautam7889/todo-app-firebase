// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADS6YbPm9ZZLjR8_GDjnqeqAZ5cX9BNv8",
    authDomain: "todo-app-firebase-4c746.firebaseapp.com",
    projectId: "todo-app-firebase-4c746",
    storageBucket: "todo-app-firebase-4c746.appspot.com",
    messagingSenderId: "422666400355",
    appId: "1:422666400355:web:e8644b733c6fde531cfe56",
    measurementId: "G-HYCPS7R3EX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)