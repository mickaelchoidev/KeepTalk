import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZDSJzIP3d5lbTB9q5qlHNCeoH8xvxkc4",
  authDomain: "keeptalk-b86b1.firebaseapp.com",
  databaseURL: "https://keeptalk-b86b1.firebaseio.com",
  projectId: "keeptalk-b86b1",
  storageBucket: "keeptalk-b86b1.appspot.com",
  messagingSenderId: "21925336856",
  appId: "1:21925336856:web:0632f13f790c5223d4706d",
  measurementId: "G-53RCRMNX60",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
