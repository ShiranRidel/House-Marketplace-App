import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChH0I3mt39Co_MEXllrXiMWnyVU-y7hSQ",
  authDomain: "house-marketplace-app-3ba1c.firebaseapp.com",
  projectId: "house-marketplace-app-3ba1c",
  storageBucket: "house-marketplace-app-3ba1c.appspot.com",
  messagingSenderId: "242068485198",
  appId: "1:242068485198:web:3228270c7374950500ff1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore()