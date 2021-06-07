import React, { lazy, Suspense, useState } from "react";
import "./App.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { app } from './base'
// firebase
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// components
const HabitList = lazy(() => import("./components/habit_list"));
const Clock = lazy(() => import("./components/clock"));
const SideNav = lazy(() => import("./components/side_nav"));
const SideNavSwipe = lazy(() => import("./components/side_nav_swipe"));
const AddHabit = lazy(() => import("./components/add_habit"));
const TwitterSignIn = lazy(() => import('./components/twitter_sign_in'))

const App = () => {
  const [user] = useAuthState(app.auth());
  const [accessTokenKey, setAccessTokenKey] = useState();
  const [accessTokenSecret, setAccessTokenSecret] = useState();

  // function that opens the side nav
  const openNav = () => {
    document.querySelector("#mySidenav").classList.add("nav-open");
  };

  // function that close the side nav
  const closeNav = () => {
    document.querySelector("#mySidenav").classList.remove("nav-open");
  };

  const renderLoader = () => {
    return (
      <section className="loading-wrap">
        <div className="loading loading04">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </section>
    )
  }

  // actual component
  return (
    <div className="App container">
      <Suspense fallback={renderLoader()}>
        { user ? <SideNavSwipe openNav={openNav} /> : null }
        <SideNav closeNav={closeNav}/>
        <header>
          <Clock />
        </header>
        {user ? <HabitList /> : <TwitterSignIn setAccessTokenSecret={setAccessTokenSecret} setAccessTokenKey={setAccessTokenKey} />}
        {user ? <AddHabit /> : null }
      </Suspense>
    </div>
  );
}
export default App;
