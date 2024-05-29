import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-366b4.firebaseapp.com",
  projectId: "store-tutorial-366b4",
  storageBucket: "store-tutorial-366b4.appspot.com",
  messagingSenderId: "862565328144",
  appId: "1:862565328144:web:3a1db50a35282c6c1d7195"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();