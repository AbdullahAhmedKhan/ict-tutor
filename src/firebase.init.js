// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr3SPxrnlYQsGtUMlT_WUrq2FLcOtVfEQ",
    authDomain: "ict-tutor-a1a22.firebaseapp.com",
    projectId: "ict-tutor-a1a22",
    storageBucket: "ict-tutor-a1a22.appspot.com",
    messagingSenderId: "342109146281",
    appId: "1:342109146281:web:be658c8a72c90d5252adb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;