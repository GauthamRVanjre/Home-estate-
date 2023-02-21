import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const isLoggedIn = useSelector((state) => state.login.isLogin);
  console.log(isLoggedIn);
  const dispatch = useDispatch();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        console.log("user logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <Link to="/Favorites">Favorites</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button onClick={signOutUser}>Log out</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
