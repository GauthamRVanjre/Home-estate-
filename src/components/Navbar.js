import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <span>Homing Estate</span>
        </Link>
      </div>
      <div className="nav-links-container">
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
