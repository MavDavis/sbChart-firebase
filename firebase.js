import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBS4nR6tvoKTs07KchWTebIcZlNja18yv8",
  authDomain: "gloryzone-donations.firebaseapp.com",
  projectId: "gloryzone-donations",
  storageBucket: "gloryzone-donations.appspot.com",
  messagingSenderId: "261300113966",
  appId: "1:261300113966:web:ed3a2adae720d28c3105bf"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp);

export const db = getFirestore(firebaseApp);