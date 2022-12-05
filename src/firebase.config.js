// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import of the desired satabase
import { getFirestore } from "firebase/store";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxTy30EL-OI69_1QM2QD5wZym9Jk8oS1A",
  authDomain: "house-marketplace-70fc1.firebaseapp.com",
  projectId: "house-marketplace-70fc1",
  storageBucket: "house-marketplace-70fc1.appspot.com",
  messagingSenderId: "791200833048",
  appId: "1:791200833048:web:bcde3df925253aabffad6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()