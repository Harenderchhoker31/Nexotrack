import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyA9cjoKMhxX9NiiHuM-dJp8KNLxBUxwmlA",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "nexotrack-3b2f3.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "nexotrack-3b2f3",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "nexotrack-3b2f3.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "656583653640",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:656583653640:web:5cada50f2af2e5a83954bd",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-G2MQJVW2VN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);