// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB78RTVCg0cmSPp7A1RJyyAgBuCeolO0cc",
  authDomain: "sk12-58e9e.firebaseapp.com",
  projectId: "sk12-58e9e",
  storageBucket: "sk12-58e9e.appspot.com",
  messagingSenderId: "470207874652",
  appId: "1:470207874652:web:67ba1cf3629b7e5b144899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const app = new GoogleAuthProvider 