import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD67-qfU9wEf7_9woUQnoLuDMiPK-9wsAI",
  authDomain: "wannandah-prjct.firebaseapp.com",
  projectId: "wannandah-prjct",
  storageBucket: "wannandah-prjct.appspot.com",
  messagingSenderId: "611758439846",
  appId: "1:611758439846:web:23a325b441e66334a96367"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp);

export const db = getFirestore(firebaseApp);