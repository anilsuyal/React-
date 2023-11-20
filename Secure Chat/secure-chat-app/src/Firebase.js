// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTPxB6bDJtYUyHPXLNV-mLkKVK9MLBpOQ",
  authDomain: "chat-6e1dd.firebaseapp.com",
  projectId: "chat-6e1dd",
  storageBucket: "chat-6e1dd.appspot.com",
  messagingSenderId: "776373101395",
  appId: "1:776373101395:web:6bf288e5d6d1377137f7a6",
  measurementId: "G-27DCGT0JGC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();