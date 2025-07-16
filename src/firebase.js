import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADXp3zaVe4l2tUjWlZ7Af_VQ1LJJ7FIyY",
authDomain: "webapp-661ff.firebaseapp.com",
projectId: "webapp-661ff",
storageBucket: "webapp-661ff.firebasestorage.app",
messagingSenderId: "456707938008",
appId: "1:456707938008:web:3a71f517eb2c7fc15aa9ad"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
