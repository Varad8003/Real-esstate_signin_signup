// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBPgLkfuadm-LE-DywpBu1Zgg0XA1k-VyI",
  authDomain: "authentication-real-estate.firebaseapp.com",
  projectId: "authentication-real-estate",
  storageBucket: "authentication-real-estate.firebasestorage.app",
  messagingSenderId: "151094367566",
  appId: "1:151094367566:web:141a958dfd7145d1127a1f",
  measurementId: "G-BMTCE58KHK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };