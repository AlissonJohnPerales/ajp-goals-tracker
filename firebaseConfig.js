import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCEWQ_jduDynaAYYoN3HrGBmeIQ8uWZj2Y",
  authDomain: "mygoals-75a2b.firebaseapp.com",
  projectId: "mygoals-75a2b",
  storageBucket: "mygoals-75a2b.firebasestorage.app",
  messagingSenderId: "623393656043",
  appId: "1:623393656043:web:dd7982da3386dba684c2ae",
  measurementId: "G-3GRWCJ8E1Z"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);