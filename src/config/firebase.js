import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8rkKzLU4nKcWxwfScKh61YGWwFh5tF_M",
    authDomain: "facebook-clone-6c47b.firebaseapp.com",
    databaseURL: "https://facebook-clone-6c47b.firebaseio.com",
    projectId: "facebook-clone-6c47b",
    storageBucket: "facebook-clone-6c47b.appspot.com",
    messagingSenderId: "186153368419",
    appId: "1:186153368419:web:0829c2ed1c6d72520d7156",
    measurementId: "G-7L390PVYZL"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // for realtime db
  const db = firebaseApp.firestore();
  // for auth
  const auth = firebaseApp.auth();
  // for login with google account
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;

  