import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnu6CrzX6xFFemjAdtN5-Ko-4lJ82tS38",
  authDomain: "costume-lk.firebaseapp.com",
  projectId: "costume-lk",
  storageBucket: "costume-lk.appspot.com",
  messagingSenderId: "757027398519",
  appId: "1:757027398519:web:c7f2ac6eba541059b77772",
  measurementId: "G-LY6JG8VRSD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
