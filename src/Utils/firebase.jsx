// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr11ORvSvND-oh7TZ7nXd_KQYBTXOFfns",
  authDomain: "netflixggpt.firebaseapp.com",
  projectId: "netflixggpt",
  storageBucket: "netflixggpt.appspot.com",
  messagingSenderId: "239138724257",
  appId: "1:239138724257:web:14a9f6f59f43ddbd7dd3e0",
  measurementId: "G-EPD55K2ZJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
