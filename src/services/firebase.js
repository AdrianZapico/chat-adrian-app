import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_jmVnS1xlU2GJWg27bRfWxDyFXfN9vj0",
    authDomain: "chat-app-adrian.firebaseapp.com",
    projectId: "chat-app-adrian",
    storageBucket: "chat-app-adrian.appspot.com",
    messagingSenderId: "246578880544",
    appId: "1:246578880544:web:14811d4b4ff8bb8ac09c45"
  };

  const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
