// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-8a0f3.firebaseapp.com",
  projectId: "authexamnotes-8a0f3",
  storageBucket: "authexamnotes-8a0f3.firebasestorage.app",
  messagingSenderId: "407162508542",
  appId: "1:407162508542:web:5c7abf20e8949e2c5581af",
  measurementId: "G-8V1CQTXHXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

const analytics = getAnalytics(app);

export {auth, provider }