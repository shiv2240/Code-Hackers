import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCC2y2RqUXHMC2PZC4bpy2oP_9zhoT21WU",
  authDomain: "crowfunding-ecea0.firebaseapp.com",
  projectId: "crowfunding-ecea0",
  storageBucket: "crowfunding-ecea0.firebasestorage.app",
  messagingSenderId: "916866888624",
  appId: "1:916866888624:web:83be677c1126a2ac095c75",
  databaseURL: "https://crowfunding-ecea0-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };



