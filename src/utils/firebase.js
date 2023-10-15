// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-87604.firebaseapp.com",
  projectId: "blogapp-87604",
  storageBucket: "blogapp-87604.appspot.com",
  messagingSenderId: "120899485763",
  appId: "1:120899485763:web:f0db2c3bf6877bbfc054f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);