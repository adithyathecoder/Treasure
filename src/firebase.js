
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk0pRlxHeKNCWw8_7PH3pJQv64n7_kE9I",
  authDomain: "treasure-hunt-elitmus.firebaseapp.com",
  projectId: "treasure-hunt-elitmus",
  storageBucket: "treasure-hunt-elitmus.appspot.com",
  messagingSenderId: "1036579027692",
  appId: "1:1036579027692:web:5265ad9a63b21485db03c9",
  measurementId: "G-Y07VSHEV90",
  databaseURL : "https://treasure-hunt-elitmus-default-rtdb.asia-southeast1.firebasedatabase.app/"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
