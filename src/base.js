import firebase from "firebase/app";
import "firebase/firestore";

export const app = firebase.initializeApp({
  // my configuration
  apiKey: "AIzaSyAr4zU_69VbMN3egLEpr2SqPELB8J4vA4Q",
  authDomain: "twitter-habit-enforcer.firebaseapp.com",
  projectId: "twitter-habit-enforcer",
  storageBucket: "twitter-habit-enforcer.appspot.com",
  messagingSenderId: "1038302881453",
  appId: "1:1038302881453:web:e5a1ec1937c27cf83fc824",
  measurementId: "G-XWE8ZF1NL6",
});

export { firebase };
