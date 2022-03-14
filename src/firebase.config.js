import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsqDhIl2JDANeBVExIPWIWw3jTcXfA6_8",
  authDomain: "house-marketplace-app-9ff7b.firebaseapp.com",
  projectId: "house-marketplace-app-9ff7b",
  storageBucket: "house-marketplace-app-9ff7b.appspot.com",
  messagingSenderId: "772976492088",
  appId: "1:772976492088:web:50f952a57fcdc3c08f70cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
