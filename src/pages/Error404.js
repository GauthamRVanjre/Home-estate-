import React from "react";
import { Link } from "react-router-dom";
import errorNotFound from "../images/pageNotFound.jpg";

const Error404 = () => {
  return (
    <>
      <div className="center-div">
        <h1>Are you Lost?</h1>
        <img src={errorNotFound} alt="error not found" />
        <Link to="/">Go To Home page</Link>
      </div>
    </>
  );
};

export default Error404;
