import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";

const SignOut = (props) => {
  const signOutAndClose = () => {
    firebase.auth().signOut();
    props.closeNav();
  }

  return (
    firebase.auth().currentUser && (
      <span className="sidenav-item" onClick={() => signOutAndClose()}>
        Sign Out
      </span>
    )
  );
}

export default SignOut;
