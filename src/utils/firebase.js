// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "netflixgpt-6d9b4.firebaseapp.com",
  projectId: "netflixgpt-6d9b4",
  storageBucket: "netflixgpt-6d9b4.appspot.com",
  messagingSenderId: "881167835250",
  appId: "1:881167835250:web:f5625c29905a726c0f22eb",
  measurementId: "G-L9V17MJL64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
