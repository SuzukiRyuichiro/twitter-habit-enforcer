import React, { lazy, Suspense } from 'react';
import { useSwipeable } from "react-swipeable";

const SideNav = (props) => {

  const SingOut = lazy(() => import('./sign_out'));

  const handlers = useSwipeable({
    onSwipedLeft: () => props.closeNav(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    delta: 10,
  });

  const renderLoader = () => <p className="text-muted">Loading</p>;

  //  Set the width of the side navigation to 0

  return (
    <div {...handlers} id="mySidenav" className="sidenav">
      <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
      <Suspense fallback={ renderLoader }>
        <SingOut closeNav={props.closeNav}/>
      </Suspense>
    </div>
  )
};

export default SideNav;
