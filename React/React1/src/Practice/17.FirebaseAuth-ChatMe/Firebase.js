
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMBUr2_vPTZnhaI9yfsCmSeZ3jifRuEjo",
  authDomain: "fir-auth-c5859.firebaseapp.com",
  projectId: "fir-auth-c5859",
  storageBucket: "fir-auth-c5859.firebasestorage.app",
  messagingSenderId: "569125594553",
  appId: "1:569125594553:web:ac81c7950501a7ab42c268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Firestore Database
export const db = getFirestore(app);

export default app;
