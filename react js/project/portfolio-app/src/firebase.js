// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnLMLT8rx_t2oBmECPWOhACUISXz1lDRA",
  authDomain: "fir-auth-78eba.firebaseapp.com",
  projectId: "fir-auth-78eba",
  storageBucket: "fir-auth-78eba.firebasestorage.app",
  messagingSenderId: "39338064362",
  appId: "1:39338064362:web:dd1b0307c413e423c21a93",
  measurementId: "G-X628CJPBT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);