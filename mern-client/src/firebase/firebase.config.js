// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDatc9wStuOP__aw6fd7W7W3NKqpUuA9yE",
  authDomain: "mern-book-inventory-1444c.firebaseapp.com",
  projectId: "mern-book-inventory-1444c",
  storageBucket: "mern-book-inventory-1444c.appspot.com",
  messagingSenderId: "937652890",
  appId: "1:937652890:web:0a08a03ecc98dfd33ae523",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;