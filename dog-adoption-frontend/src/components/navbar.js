import { NavLink } from "react-router-dom";

const navbar = () => {
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
          <li className="logo-wrapper">
            <a className="list-icon">
              <NavLink to= "/">
                <img alt="list-icon" src={require("../images/List.jpg")}></img>
              </NavLink>
            </a>
          </li>
        </ul>

        <ul className="dropdown menu">
          <li className="nav-link">
            <a className="search-icon">
              <NavLink to= "/">
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
              Shepherd
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
  
  export default navbar;