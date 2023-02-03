import React from "react";
import No_image from "../images/no_image.jpg";

const HomeCard = ({
  home: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    baths,
    title,
    area,
    externalID,
  },
}) => {
  return (
    <div class="card">
      <img
        src={coverPhoto ? coverPhoto.url : No_image}
        class="card-img-top"
        alt="cover img"
      />
      <div class="card-body">
        <p style={{ fontWeight: "700" }} className="card-title">
          {price} AED
          {rentFrequency ? `/rentFrequency` : ""}
        </p>
        <div class="card-text">
          <p>{title.length > 50 ? title.substring(0, 50) + "..." : title}</p>
          <div className="card-feature">{rooms} bedroom</div>
          <div className="card-feature">{baths} bathroom</div>
          <div className="card-feature">{area} SQFT</div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;