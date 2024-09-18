// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLwGCY5fTrgJOW3X0CAybVn-SRLnn8D5Q",
  authDomain: "blog-post-4d140.firebaseapp.com",
  projectId: "blog-post-4d140",
  storageBucket: "blog-post-4d140.appspot.com",
  messagingSenderId: "963165717009",
  appId: "1:963165717009:web:30c9daf7c652d780a827b0",
  measurementId: "G-3PJRWE9ZCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const imageDb = getStorage(app);
