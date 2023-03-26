import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuCV2wAfkwIwnCwSarNj69RiM0jlkTK04",
  authDomain: "ionutshop-cd875.firebaseapp.com",
  projectId: "ionutshop-cd875",
  storageBucket: "ionutshop-cd875.appspot.com",
  messagingSenderId: "232465190029",
  appId: "1:232465190029:web:ab584176808497a46266c4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
