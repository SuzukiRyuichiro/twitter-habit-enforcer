import React, { lazy } from 'react';
import { useSwipeable } from "react-swipeable";

const SideNav = (props) => {

  const SingOut = lazy(() => import('./sign_out'));

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
