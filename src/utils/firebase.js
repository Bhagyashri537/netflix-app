// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZUWYPpy0wOdlDuL_COO0sxR6ti4Zdolk",
  authDomain: "netflix-8fa6f.firebaseapp.com",
  projectId: "netflix-8fa6f",
  storageBucket: "netflix-8fa6f.appspot.com",
  messagingSenderId: "4445562058",
  appId: "1:4445562058:web:911caaf0144f429c564033",
  measurementId: "G-ZQH0D6HD9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();