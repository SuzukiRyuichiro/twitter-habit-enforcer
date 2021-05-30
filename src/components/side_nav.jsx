import React from 'react';
import firebase from "firebase/app";

const closeNav = () => {
  document.querySelector("#mySidenav").classList.remove("nav-open")
}

const SideNav = () => {

  //  Set the width of the side navigation to 0

  return (
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
      <SingOut />
    </div>
  )
};

function SingOut() {
  const signOutAndClose = () => {
    firebase.auth().signOut();
    closeNav();
  }

  return (
    firebase.auth().currentUser && (
      <span className="sidenav-item" onClick={() => signOutAndClose()}>
        Sign Out
      </span>
    )
  );
}


export default SideNav;
