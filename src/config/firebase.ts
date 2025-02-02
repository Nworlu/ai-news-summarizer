// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_lKZMeHPPLGSyQGNph9mowxRq7e1dx7o",
  authDomain: "fir-chatapp-27d04.firebaseapp.com",
  projectId: "fir-chatapp-27d04",
  storageBucket: "fir-chatapp-27d04.firebasestorage.app",
  messagingSenderId: "272076745735",
  appId: "1:272076745735:web:ed056ac76e7d0618650ea2",
  measurementId: "G-JP238EZTYT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
