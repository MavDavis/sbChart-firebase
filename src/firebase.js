import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0fQc8SvrVDjCwr7G1uS5d8q1AwIQOZVQ",
  authDomain: "mubarak-4-fct-senate.firebaseapp.com",
  projectId: "mubarak-4-fct-senate",
  storageBucket: "mubarak-4-fct-senate.appspot.com",
  messagingSenderId: "214776315108",
  appId: "1:214776315108:web:34a676d84354e36e8740f1"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp);

export const db = getFirestore(firebaseApp);