import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9cjoKMhxX9NiiHuM-dJp8KNLxBUxwmlA",
  authDomain: "nexotrack-3b2f3.firebaseapp.com",
  projectId: "nexotrack-3b2f3",
  storageBucket: "nexotrack-3b2f3.firebasestorage.app",
  messagingSenderId: "656583653640",
  appId: "1:656583653640:web:5cada50f2af2e5a83954bd",
  measurementId: "G-G2MQJVW2VN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);