// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

require("dotenv").config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(process.env.FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blockchain-verify-demo.firebaseapp.com",
  databaseURL: "https://blockchain-verify-demo-default-rtdb.firebaseio.com",
  projectId: "blockchain-verify-demo",
  storageBucket: "blockchain-verify-demo.appspot.com",
  messagingSenderId: process.env.FIREBASE_MEASURE_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-TBVKYLGQJC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = {
  app,
  db,
};
