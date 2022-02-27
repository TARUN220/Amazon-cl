  // import firebase from 'firebase/compat/app';
// // // import firebase from "firebase";
import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// // import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIEnKHuK-LDt-uo3ptjTXLGWkBWE1GKrw",
  authDomain: "challenge-3c35d.firebaseapp.com",
  projectId: "challenge-3c35d",
  storageBucket: "challenge-3c35d.appspot.com",
  messagingSenderId: "979998527578",
  appId: "1:979998527578:web:4928711c9d8afe4c6e0863",
  measurementId: "G-RDX5BMTYE8"
};

 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)

//  const db = firebaseApp.firestore();
//  const auth = firebase.auth();

//  export { db, auth };

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}


// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}