// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQVApeOuap5UjMfNuKXFU1qaSzb9La2xs",
  authDomain: "my-computer-store-9e4ae.firebaseapp.com",
  projectId: "my-computer-store-9e4ae",
  storageBucket: "my-computer-store-9e4ae.appspot.com",
  messagingSenderId: "639888697213",
  appId: "1:639888697213:web:9c808b2862ba3141f58e14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
