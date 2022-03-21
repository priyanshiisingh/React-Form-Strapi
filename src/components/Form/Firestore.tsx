// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtptRdR5tWyiXoIAWN-bU9apHL2e6C6Cs",
  authDomain: "react-form-render.firebaseapp.com",
  projectId: "react-form-render",
  storageBucket: "react-form-render.appspot.com",
  messagingSenderId: "867083169359",
  appId: "1:867083169359:web:5aa20d421bf1356a36c43a",
  measurementId: "G-MWM39J26XM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const storage = firebase.storage();

export const db = getFirestore(app);
//We’ll import db anytime we need to access the database.
export const auth = getAuth();
//We’ll import auth anytime we need to authenticate with Firebase.
export const provider = new GoogleAuthProvider();
//We’ll import provider anytime we need to authenticate with Google.
