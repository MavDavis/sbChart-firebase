import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzDR_AJPn1aKHxKKiZNx4TIW0Q1tVqLRQ",
  authDomain: "sb-chart.firebaseapp.com",
  projectId: "sb-chart",
  storageBucket: "sb-chart.appspot.com",
  messagingSenderId: "230636159047",
  appId: "1:230636159047:web:6b17d85d4787d723f73162"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp);

export const db = getFirestore(firebaseApp);