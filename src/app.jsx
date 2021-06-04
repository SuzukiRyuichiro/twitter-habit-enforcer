import React, { lazy, Suspense } from "react";
import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { app, firebase } from './base'
// firebase
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

// components
const HabitList = lazy(() => import("./components/habit_list"));
const Clock = lazy(() => import("./components/clock"));
const SideNav = lazy(() => import("./components/side_nav"));
const SideNavSwipe = lazy(() => import("./components/side_nav_swipe"));
const AddHabit = lazy(() => import("./components/add_habit"));

const App = () => {
  const [user] = useAuthState(app.auth());

  // function that opens the side nav
  const openNav = () => {
    document.querySelector("#mySidenav").classList.add("nav-open");
  };

  // function that close the side nav
  const closeNav = () => {
    document.querySelector("#mySidenav").classList.remove("nav-open");
  };

  const renderLoader = () => <p>Loading</p>;


  // actual component
  return (
    <div className="App container">
    <Suspense fallback={renderLoader()}>
      <SideNavSwipe openNav={openNav} />
      <SideNav closeNav={closeNav}/>
      <header>
        <Clock />
      </header>
      {user ? <HabitList /> : <TwitterSignIn />}
      {user ? <AddHabit /> : null }
      </Suspense>
    </div>
  );
}


const TwitterSignIn = () => {
  // Using a popup.
  const signInWithTwitter = () => {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
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
