// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "good-estate-a17ed.firebaseapp.com",
  projectId: "good-estate-a17ed",
  storageBucket: "good-estate-a17ed.appspot.com",
  messagingSenderId: "87084530791",
  appId: "1:87084530791:web:30bcb8a9febd5e5fa7a8c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);