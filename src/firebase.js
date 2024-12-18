// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPgLkfuadm-LE-DywpBu1Zgg0XA1k-VyI",
  authDomain: "authentication-real-estate.firebaseapp.com",
  projectId: "authentication-real-estate",
  storageBucket: "authentication-real-estate.firebasestorage.app",
  messagingSenderId: "151094367566",
  appId: "1:151094367566:web:141a958dfd7145d1127a1f",
  measurementId: "G-BMTCE58KHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);