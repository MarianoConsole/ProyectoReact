import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2Xv1Qp5ymi3x6krIhWvuu1a8FFeVxjdM",
  authDomain: "proyecto-react-49969.firebaseapp.com",
  projectId: "proyecto-react-49969",
  storageBucket: "proyecto-react-49969.appspot.com",
  messagingSenderId: "726987473586",
  appId: "1:726987473586:web:e4f042b822f29df1c73fab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize base de datos
export const db = getFirestore(app); 
