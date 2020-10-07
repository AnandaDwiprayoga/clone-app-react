import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvj4mowsFGQZzAnIdO8MvsnmqkkgT7y-0",
  authDomain: "slack-clone-4d57f.firebaseapp.com",
  databaseURL: "https://slack-clone-4d57f.firebaseio.com",
  projectId: "slack-clone-4d57f",
  storageBucket: "slack-clone-4d57f.appspot.com",
  messagingSenderId: "9442653333",
  appId: "1:9442653333:web:877d0d51c316923309d79c",
  measurementId: "G-5XYK9WTTM7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// for realtime db
const db = firebaseApp.firestore();
// for auth
const auth = firebaseApp.auth();
// provider to auth from google
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;
  