// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5VtyBA-zfLovRutNBsmO3gq1nZzJIxs8",
  authDomain: "instareels-clone-4ead8.firebaseapp.com",
  projectId: "instareels-clone-4ead8",
  storageBucket: "instareels-clone-4ead8.appspot.com",
  messagingSenderId: "183716187018",
  appId: "1:183716187018:web:fe1e860ffa6c3be8631673",
  measurementId: "G-DJ0Q2BD3Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app); 
const db = getFirestore(app);
export { auth, storage,db};
