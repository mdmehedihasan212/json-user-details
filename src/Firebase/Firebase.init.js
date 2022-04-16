// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0xsUjssOdGcH9MX1Gbg7dweXE4dmtpEc",
    authDomain: "json-users-details.firebaseapp.com",
    projectId: "json-users-details",
    storageBucket: "json-users-details.appspot.com",
    messagingSenderId: "581510433297",
    appId: "1:581510433297:web:66fc06411f763ae8547fb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;