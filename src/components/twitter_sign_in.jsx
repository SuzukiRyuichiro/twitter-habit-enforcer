import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Twitter from 'twitter-lite';


const TwitterSignIn = (props) => {
  // Using a popup.
  const signInWithTwitter = () => {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // For accessing the Twitter API.
        var token = result.credential.accessToken;
        props.setAccessToken(token);
        var secret = result.credential.secret;
        props.setAccessTokenScret(secret);
        // The signed-in user info.
        var user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
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
