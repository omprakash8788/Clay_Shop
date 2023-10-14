// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyACKQn-qcKatM5m3Fw71ukzXrMJVUtzTYk",
  authDomain: "clay-shop-a7721.firebaseapp.com",
  projectId: "clay-shop-a7721",
  storageBucket: "clay-shop-a7721.appspot.com",
  messagingSenderId: "406412328369",
  appId: "1:406412328369:web:cc1cef4fb7f26f736d9190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;