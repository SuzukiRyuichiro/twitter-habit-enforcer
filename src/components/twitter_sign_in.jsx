import React, { useState } from "react";
import { app, firebase, firestore } from '../base'

const TwitterSignIn = (props) => {
  // Using a popup.
  const usersRef = firestore.collection("users"); // this is the colletion in the firestore

  const addToken = async (twitter_access_secret, twitter_access_token) => {
    const { uid } = app.auth().currentUser;
    await usersRef.add({
      twitter_access_secret: twitter_access_secret,
      twitter_access_token: twitter_access_token,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid
    });
  };

  const signInWithTwitter = () => {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // For accessing the Twitter API.
        let twitter_access_secret = result.credential.secret;
        let twitter_access_token = result.credential.accessToken;
        addToken(twitter_access_secret, twitter_access_token);
      })
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
      });
  };


  return (
    <button onClick={signInWithTwitter} className="sign-in-with-twitter">
      Sign in with Twitter
    </button>
  );
}

export default TwitterSignIn;
