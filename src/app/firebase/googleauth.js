import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "your credentials",
  projectId: "your credentials",
  storageBucket: "your credentials",
  messagingSenderId: "your credentials",
  appId: "your credentials"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const signIn = () => auth.signInWithPopup(provider);
const signOut = () => auth.signOut();