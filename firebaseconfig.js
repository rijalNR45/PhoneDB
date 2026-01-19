// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6I27jD7_sXKNZd5zCgVylqifGRB8NHBk",
  authDomain: "phonedb-3f353.firebaseapp.com",
  projectId: "phonedb-3f353",
  storageBucket: "phonedb-3f353.firebasestorage.app",
  messagingSenderId: "42218855883",
  appId: "1:42218855883:web:a26a6601f0fa3da8676a4e",
  measurementId: "G-76LVZM74Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
