import React, { useState } from "react";
import "./Dropdown.css";
import { NavLink } from "react-router-dom";

const Dropdown = ({ user }) => {
  const [isclicked, setIsclicked] = useState(false);

  const authenticatedOptions = (
    <>
      <li>
        <div className="user-info">Logged in as: {user && user.username}</div>
      </li>
      <li className="dropdown-hover">
        <NavLink to={`/listings/user-listings`} className="dropdown-link">
          Manage Listings
        </NavLink>
      </li>
      <li className="dropdown-hover">
        <NavLink to="/sign-out" className="dropdown-link">
          Sign Out
        </NavLink>
      </li>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <li className="dropdown-hover">
        <NavLink to="/sign-in" className="dropdown-link">
          Sign In
        </NavLink>
      </li>
      <li className="dropdown-hover">
        <NavLink to="/sign-up" className="dropdown-link">
          Sign Up
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <ul
        onClick={() => setIsclicked(false)}
        className={isclicked ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {user ? authenticatedOptions : unauthenticatedOptions}
      </ul>
    </>
  );
};

export default Dropdown;
