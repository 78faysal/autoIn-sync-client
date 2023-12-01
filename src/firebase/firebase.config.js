// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDXx3325zFgP8xiik-pW2WHZNyeD5h5ac",
  authDomain: "autoinsync.firebaseapp.com",
  projectId: "autoinsync",
  storageBucket: "autoinsync.appspot.com",
  messagingSenderId: "640210982186",
  appId: "1:640210982186:web:d98f5bcf0c21c9c196ba53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);