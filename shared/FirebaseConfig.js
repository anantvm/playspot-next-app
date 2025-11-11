// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqGC1HNxLHitvJzlh_osgkwHPYmLBzsFY",
  authDomain: "anantvm-9a230.firebaseapp.com",
  projectId: "anantvm-9a230",
  storageBucket: "anantvm-9a230.firebasestorage.app",
  messagingSenderId: "752600789647",
  appId: "1:752600789647:web:43ea93a848584a4a9576fa",
  measurementId: "G-BQZT91CMHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;