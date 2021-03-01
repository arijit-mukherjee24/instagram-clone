import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOgdKnwKj5mpN-Oj9IJ805-LZL2a6DbWE",
  authDomain: "instagram-clone-452fc.firebaseapp.com",
  databaseURL: "https://instagram-clone-452fc.firebaseio.com",
  projectId: "instagram-clone-452fc",
  storageBucket: "instagram-clone-452fc.appspot.com",
  messagingSenderId: "896224372249",
  appId: "1:896224372249:web:f44ae3d540ee1889a12c88"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
