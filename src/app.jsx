import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

// firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

// components
import HabitList from "./components/habit_list";
import Clock from "./components/clock";
import SideNav from "./components/side_nav";
import SideNavSwipe from "./components/side_nav_swipe";
import AddHabit from "./components/add_habit";

if (!firebase.apps.length) {
  firebase.initializeApp({
    // my configuration
    apiKey: "AIzaSyAr4zU_69VbMN3egLEpr2SqPELB8J4vA4Q",
    authDomain: "twitter-habit-enforcer.firebaseapp.com",
    projectId: "twitter-habit-enforcer",
    storageBucket: "twitter-habit-enforcer.appspot.com",
    messagingSenderId: "1038302881453",
    appId: "1:1038302881453:web:e5a1ec1937c27cf83fc824",
    measurementId: "G-XWE8ZF1NL6",
  });
}

const App = () => {
  const [user] = useAuthState(firebase.auth());

  // function that opens the side nav
  const openNav = () => {
    document.querySelector("#mySidenav").classList.add("nav-open");
  };

  // function that close the side nav
  const closeNav = () => {
    document.querySelector("#mySidenav").classList.remove("nav-open");
  };


  // actual component
  return (
    <div className="App container">
      {user ? (
        <FontAwesomeIcon
          icon={faSignOutAlt}
          onClick={() => openNav()}
          className="open-nav"
        />
      ) : null}
      <SideNavSwipe openNav={openNav} />
      <SideNav closeNav={closeNav}/>
      <header>
        <Clock />
      </header>
      {user ? <HabitList /> : <TwitterSignIn />}
      {user ? <AddHabit /> : null }
    </div>
  );
}


function TwitterSignIn() {
  // Using a popup.
  const signInWithTwitter = () => {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // // For accessing the Twitter API.
        // var token = result.credential.accessToken;
        // var secret = result.credential.secret;
        // // The signed-in user info.
        // var user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <button onClick={signInWithTwitter} className="sign-in-with-twitter">
      Sign in with Twitter
    </button>
  );
}

export default App;
