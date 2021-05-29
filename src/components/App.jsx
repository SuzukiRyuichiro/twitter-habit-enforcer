import React, { Component } from 'react';
import '../App.css';

// firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// components
import HabitList from './habit_list'

if (!firebase.apps.length) {
  firebase.initializeApp({
    // my configuration
    apiKey: "AIzaSyAr4zU_69VbMN3egLEpr2SqPELB8J4vA4Q",
    authDomain: "twitter-habit-enforcer.firebaseapp.com",
    projectId: "twitter-habit-enforcer",
    storageBucket: "twitter-habit-enforcer.appspot.com",
    messagingSenderId: "1038302881453",
    appId: "1:1038302881453:web:e5a1ec1937c27cf83fc824",
    measurementId: "G-XWE8ZF1NL6"
  })
};

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(firebase.auth());
  return (
    <div className="App">
        <header>
          <SingOut />
          <h3>13:30</h3>
        </header>
        <section>
          {user ? <HabitList /> : <TwitterSignIn />}
        </section>
        <h3>{ user ? user.uid : '' }</h3>
      </div>
  )
}




function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function TwitterSignIn() {
  // Using a popup.
  const signInWithTwitter = () => {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // For accessing the Twitter API.
      var token = result.credential.accessToken;
      var secret = result.credential.secret;
      // The signed-in user info.
      var user = result.user;
    })
  }

  return (
    <button onClick={signInWithTwitter}>Sign in with Twitter</button>
  )
}

function SingOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}


export default App;
