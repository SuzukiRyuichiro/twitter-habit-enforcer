import React from 'react';
import SingOut from './sign_out'
import { useSwipeable } from "react-swipeable";

const SideNav = (props) => {

  const handlers = useSwipeable({
    onSwipedLeft: () => props.closeNav(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    delta: 10,
  });

  //  Set the width of the side navigation to 0

  return (
    <div {...handlers} id="mySidenav" className="sidenav">
      <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
      <SingOut closeNav={props.closeNav}/>
    </div>
  )
};

export default SideNav;
