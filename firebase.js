// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
require("firebase/firestore");
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL4arDX4eSMUFlejQCN1rBCceHVE5co5g",
  authDomain: "mobile1-e73c8.firebaseapp.com",
  projectId: "mobile1-e73c8",
  storageBucket: "mobile1-e73c8.appspot.com",
  messagingSenderId: "1037199580469",
  appId: "1:1037199580469:web:2127c6abeba100a460807c",
  measurementId: "G-YW8QFJ9PP0",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firestore
const db = firebase.firestore();

export { auth, db };
