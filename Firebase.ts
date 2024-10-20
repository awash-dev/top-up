import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-yPqJQJ7NU1Pvi4m4GCkPTJ69sb6VMgE",
  authDomain: "top-up-2d445.firebaseapp.com",
  projectId: "top-up-2d445",
  storageBucket: "top-up-2d445.appspot.com",
  messagingSenderId: "196957464132",
  appId: "1:196957464132:web:6fe74b0c1e8986e6f07e11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
