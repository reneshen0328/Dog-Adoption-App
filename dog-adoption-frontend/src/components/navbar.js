import { NavLink } from "react-router-dom";
import React, {useState } from "react";

const Navbar = () => {

  const [hamburgerClicked, setHamburgerClicked] = useState(false)

  return (
    <nav className="navbar-wrapper">
      <ul className="menu">
        <li className="logo-wrapper">
          <a className="logo">
            <NavLink to= "/">
              <img alt="logo" src={require("../images/dog-logo.jpg")}></img>
            </NavLink>
          </a>
        </li>
        <li className="hamburger">
          <a className="list-icon">
            {/* <NavLink to= "">
              <img alt="list-icon" src={require("../images/List.jpg")}></img>
            </NavLink> */}
            <img onClick={() => setHamburgerClicked(true)} alt="list-icon" src={require("../images/List.jpg")}></img>

          </a>
          <div className={`${!hamburgerClicked ? 'hamburger-closed' : 'hamburger-opened'}`}>
              <ul>
                <li>
                  <a href="/alldogs">All Dogs</a>
                </li>
                <li>
                  <a href="/">Retriever</a>
                </li>
                <li>
                  <a href="/">Bulldog</a>
                </li>
                <li>
                  <a href="/">Corgi</a>
                </li>
                <li>
                  <a href="/">Poodle</a>
                </li>
              </ul>
          </div>
        </li>
      </ul>

      <ul className="dropdown">
        <li className="search-icon">
          <a>
            <NavLink to= "">
              <img alt="search-icon" src={require("../images/MagnifyingGlass.jpg")}></img>
            </NavLink>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <NavLink to= "/alldogs">
              All dogs
            </NavLink>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <NavLink to= "/">
              Retriever
            </NavLink>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <NavLink to= "/">
            Bulldog
            </NavLink>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <NavLink to= "/">
            Corgi
            </NavLink>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <NavLink to= "/">
            Poodle
            </NavLink>
          </a>
        </li>
      </ul>

    </nav>
  );
};
  
export default Navbar;