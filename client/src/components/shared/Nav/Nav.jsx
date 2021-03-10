import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import "./Nav.css";

const activeStyle = {
  fontWeight: "800",
  color: "#f4a261",
};

const Nav = ({ user }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleIsClicked = () => setIsClicked(!isClicked);
  const closeMobileMenu = () => setIsClicked(false);

  const onMouseEnter = () =>
    setDropdown(window.innerWidth > 960 ? true : false);

  const onMouseLeave = () => setDropdown(false);

  const manageListings = (
    <li className="nav-item nav-hover">
      <NavLink
        to="/listings/user-listings"
        className="nav-links hidden"
        onClick={closeMobileMenu}
        activeStyle={activeStyle}
      >
        Manage Listings
      </NavLink>
    </li>
  );

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          <h1>Neighbor.ly</h1>
        </NavLink>

        <div className="menu-icon" onClick={handleIsClicked}>
          <i className={isClicked ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item nav-hover">
            <NavLink
              to="/listings"
              className="nav-links"
              onClick={closeMobileMenu}
              activeStyle={activeStyle}
            >
              Borrow
            </NavLink>
          </li>

          <li className="nav-item nav-hover">
            <NavLink
              to={user ? "/add-listing" : "/sign-in"}
              className="nav-links"
              onClick={closeMobileMenu}
              activeStyle={activeStyle}
            >
              Lend
            </NavLink>
          </li>

          <li className="nav-item nav-hover">
            <NavLink
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
              activeStyle={activeStyle}
            >
              About
            </NavLink>
          </li>

          {user && manageListings}

          <li className="nav-item">
            <NavLink
              to={user ? "/sign-out" : "/sign-in"}
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              {user ? "Sign out" : "Log in"}
            </NavLink>
          </li>
        </ul>

        <li
          className="nav-item login toggle"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <NavLink to="#" className="nav-links" onClick={closeMobileMenu}>
            {user ? "Profile " : "Log in "}
            <i className="fas fa-caret-down" />
          </NavLink>
          {dropdown && <Dropdown user={user} />}
        </li>
      </nav>
    </>
  );
};

export default Nav;
