import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";

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
import TwitterSignIn from "./components/twitter_sign_in";
import Test from "./components/test";

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

const auth = firebase.auth();

const App = () => {
  const [user] = useAuthState(firebase.auth());
  const [accessToken, setAccessToken] = useState();
  const [accessTokenSecret, setAccessTokenScret] = useState();
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
      <Test accessToken={accessToken} accessTokenSecret={accessTokenSecret} />
      <header>
        <Clock />
      </header>
      {user ? <HabitList /> : <TwitterSignIn setAccessToken={setAccessToken} setAccessTokenScret={setAccessTokenScret} />}
      {user ? <AddHabit /> : null }
    </div>
  );
}

export default App;
