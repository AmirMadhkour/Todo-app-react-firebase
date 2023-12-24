// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCULQKaPLVAqvb2ha0DZNBlVjse9N6mxr0",
  authDomain: "todo-2e62d.firebaseapp.com",
  projectId: "todo-2e62d",
  storageBucket: "todo-2e62d.appspot.com",
  messagingSenderId: "999826213180",
  appId: "1:999826213180:web:89fafdbcc4765c65b43639",
  measurementId: "G-C3SF57K658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) //yejbed firestore mtaa lapp 