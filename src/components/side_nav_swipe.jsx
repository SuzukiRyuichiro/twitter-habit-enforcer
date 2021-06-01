import React from 'react';
import firebase from "firebase/app";
import { useSwipeable } from "react-swipeable";


const  SideNavSwipe = (props) => {
  const handlers = useSwipeable({
    onSwipedRight: () => props.openNav(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    delta: 10,
  });

  return <div {...handlers} className="sidenav-swipe"></div>;
}

export default SideNavSwipe
