import React from 'react';
import "firebase/auth";
import { app } from '../base';

const SignOut = (props) => {
  const signOutAndClose = () => {
    app.auth().signOut();
    props.closeNav();
  }

  return (
    app.auth().currentUser && (
      <span className="sidenav-item" onClick={() => signOutAndClose()}>
        Sign Out
      </span>
    )
  );
}

export default SignOut;
