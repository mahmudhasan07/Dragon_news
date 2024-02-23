// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIuvvR9lJLY4bD2Qh9ZXudXe2aGGmLh54",
  authDomain: "dragon-news-ac70e.firebaseapp.com",
  projectId: "dragon-news-ac70e",
  storageBucket: "dragon-news-ac70e.appspot.com",
  messagingSenderId: "109412682255",
  appId: "1:109412682255:web:2ffacdcb5e65946fb3317a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app