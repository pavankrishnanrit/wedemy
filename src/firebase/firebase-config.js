// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTbzUWeUxNHlfDNra3LH_74HfoNNApznI",
  authDomain: "wedemy-1982.firebaseapp.com",
  projectId: "wedemy-1982",
  storageBucket: "wedemy-1982.appspot.com",
  messagingSenderId: "402476370226",
  appId: "1:402476370226:web:fc7c479134d5d7fd0def2b",
  measurementId: "G-MBXDGH7MNW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
