// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "study-abroad-ebf18.firebaseapp.com",
  projectId: "study-abroad-ebf18",
  storageBucket: "study-abroad-ebf18.appspot.com",
  messagingSenderId: "448249414427",
  appId: "1:448249414427:web:8082065598cf7663ca09be",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
