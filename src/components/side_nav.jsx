import React from 'react';

const SideNav = () => {

  //  Set the width of the side navigation to 0
  const closeNav = () => {
    document.querySelector("#mySidenav").classList.remove("nav-open")
  }

  return (
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onClick={() =>closeNav()}>&times;</a>
      <a href="#">Contact</a>
    </div>
  )
};



export default SideNav;
