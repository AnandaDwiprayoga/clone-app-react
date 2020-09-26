import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8hQAnPxv7RVu4uLU-YynufzzjiR6BpDk",
  authDomain: "instagram-clone-deaf2.firebaseapp.com",
  databaseURL: "https://instagram-clone-deaf2.firebaseio.com",
  projectId: "instagram-clone-deaf2",
  storageBucket: "instagram-clone-deaf2.appspot.com",
  messagingSenderId: "4641671574",
  appId: "1:4641671574:web:6a38f5206086995f01f5b7",
  measurementId: "G-EVSKK3PSD7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
// for realtime db
const db = firebaseApp.firestore();
// for auth
const auth = firebaseApp.auth();
// for storage to save picture
const storage = firebaseApp.storage();

export {db, auth, storage};
  