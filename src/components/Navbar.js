import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <span>Homing Estate</span>
        </Link>
      </div>

      <div className="nav-toggle">
        <button
          className="btn btn-toggle"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <p className={isNavExpanded ? "noneDisplay" : "blockDisplay"}>☰</p>

          <p className={isNavExpanded ? "blockDisplay" : "noneDisplay"}>X</p>
        </button>
      </div>

      <div
        className={
          isNavExpanded
            ? "nav-links-container nav-links-container-mobile"
            : "nav-links-container"
        }
      >
        <ul className="nav-links">
          <li>
            <Link to="/buy">Buy</Link>
          </li>
          <li>
            <Link to="/rent">Rent</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
