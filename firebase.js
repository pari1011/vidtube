// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs9WhVx_pvyxG9KnbMuylK7RKgyyLRfo0",
  authDomain: "react--clone-3b76a.firebaseapp.com",
  projectId: "react--clone-3b76a",
  storageBucket: "react--clone-3b76a.firebasestorage.app",
  messagingSenderId: "941356018669",
  appId: "1:941356018669:web:181224835c8ff925dfd5e4",
  measurementId: "G-L3FBXG43SG",
  databaseURL: "https://react--clone-3b76a-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
