import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-87604.firebaseapp.com",
  projectId: "blogapp-87604",
  storageBucket: "blogapp-87604.appspot.com",
  messagingSenderId: "120899485763",
  appId: "1:120899485763:web:f0db2c3bf6877bbfc054f6"
};

export const app = initializeApp(firebaseConfig);