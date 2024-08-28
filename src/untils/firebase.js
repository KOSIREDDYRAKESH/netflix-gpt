// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCl8LTjkBJpnrPGYnznDtjYJdKUMpSVUiY",
    authDomain: "netflix-gpt-562cb.firebaseapp.com",
    projectId: "netflix-gpt-562cb",
    storageBucket: "netflix-gpt-562cb.appspot.com",
    messagingSenderId: "319989375536",
    appId: "1:319989375536:web:c63304e6169dd2a27903f5",
    measurementId: "G-C625V5X5Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();