import React, { useState } from "react";
import { app, firebase } from '../base'

const TwitterSignIn = (props) => {
  // Using a popup.

  const signInWithTwitter = () => {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // For accessing the Twitter API.
        let token = result.credential.accessToken;
        props.setAccessTokenKey(token);
        console.log(token);
        let secret = result.credential.secret;
        props.setAccessTokenSecret(secret);
        console.log(secret);
        // The signed-in user info.
        let user = result.user;
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
