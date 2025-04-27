// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQGTAecgzohggO2ziC_ZT9egOPEbw5Lm4",
  authDomain: "netflixgpt-cb8c9.firebaseapp.com",
  projectId: "netflixgpt-cb8c9",
  storageBucket: "netflixgpt-cb8c9.firebasestorage.app",
  messagingSenderId: "307924730261",
  appId: "1:307924730261:web:9e5bf1ee809637a84f369c",
  measurementId: "G-QTKC4QLB8X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// export const auth = getAuth();
export const auth = getAuth();
