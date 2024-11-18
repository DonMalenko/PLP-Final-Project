// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMBebcwO7cTkMXfRtMrqS-xv7N3tQ0PGI",
  authDomain: "telemedicine-auth.firebaseapp.com",
  projectId: "telemedicine-auth",
  storageBucket: "telemedicine-auth.firebasestorage.app",
  messagingSenderId: "341053128946",
  appId: "1:341053128946:web:12f8770ba3a3f1f0f0906b",
  measurementId: "G-E4G6CRZWXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };