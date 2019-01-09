import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand" />
      Navbar{" "}
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//   }
// }

export default NavBar;
