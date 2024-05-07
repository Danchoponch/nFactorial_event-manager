// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJh7ym0_T2iaPThKShHuu-V5Vtl3nq8DY",
  authDomain: "event-manager-63ef0.firebaseapp.com",
  databaseURL: "https://event-manager-63ef0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "event-manager-63ef0",
  storageBucket: "event-manager-63ef0.appspot.com",
  messagingSenderId: "234104439728",
  appId: "1:234104439728:web:6be001919f5a11a4c44c75",
  measurementId: "G-RQDDG2GBYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{app, auth};