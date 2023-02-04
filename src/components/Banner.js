import React from "react";
import { Link } from "react-router-dom";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => {
  return (
    <div className="banner">
      <div className="banner-img-container">
        <img
          style={{ width: "450px", height: "300px" }}
          src={imageUrl}
          alt="banner img"
        />
      </div>
      <div className="banner-content">
        <p>{purpose}</p>
        <h3>
          {title1} <br />
          {title2}
        </h3>
        <p>
          {desc1} <br />
          {desc2}
        </p>
        <button className="btn btn-toggle">
          <Link to={linkName}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
