

// Import the functions you need from the SDKs you need
import firebase  from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFPiuTZj2tHP5QbBSRDjICHJo17qKvDys",
  authDomain: "clon-37089.firebaseapp.com",
  projectId: "clon-37089",
  storageBucket: "clon-37089.appspot.com",
  messagingSenderId: "394549917644",
  appId: "1:394549917644:web:abf26a6d6e440ce3ce8f69",
  measurementId: "G-TT8ZS3JC1K"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = app.firestore()
