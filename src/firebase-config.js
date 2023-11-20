import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWP0qCrtdDBJ1BRANI15U6i5cot4qJgW4",
  authDomain: "react-crud-ea91d.firebaseapp.com",
  projectId: "react-crud-ea91d",
  storageBucket: "react-crud-ea91d.appspot.com",
  messagingSenderId: "998915987862",
  appId: "1:998915987862:web:dd31a2b3a8f68b4bdda5b7",
  measurementId: "G-VG73WGQ1XG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
