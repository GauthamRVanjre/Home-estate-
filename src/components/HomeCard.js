import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import No_image from "../images/no_image.jpg";
import { ADD, REMOVE } from "../redux/action/favoriteAction";

const HomeCard = ({ home }) => {
  const favoriteHomesData = useSelector(
    (state) => state.favoriteHomes.favorites
  );
  const dispatch = useDispatch();

  const removeFavorite = (id) => {
    dispatch(REMOVE(id));
  };

  const addToFavorite = (item) => {
    dispatch(ADD(item));
  };

  return (
    <div key={home.id} class="card">
      <Link to={`/detail/:${home.externalID}`}>
        <img
          src={home.coverPhoto ? home.coverPhoto.url : No_image}
          class="card-img-top"
          alt="cover img"
        />
      </Link>
      <div class="card-body">
        <p style={{ fontWeight: "700" }} className="card-title">
          {home.price} AED
          {home.rentFrequency ? `/${home.rentFrequency}` : ""}
        </p>
        <div class="card-text">
          <p>
            {home.title.length > 50
              ? home.title.substring(0, 50) + "..."
              : home.title}
          </p>
          <div className="card-feature">{home.rooms} bedroom</div>
          <div className="card-feature">{home.baths} bathroom</div>
          <div className="card-feature">{home.area} SQFT</div>
        </div>

        {favoriteHomesData.find((item) => item.id === home.id) ? (
          <button
            className="fav-btn-container btn btn-danger"
            onClick={() => removeFavorite(home.id)}
          >
            Remove from favorites
          </button>
        ) : (
          <button
            className="fav-btn-container btn btn-primary"
            onClick={() => addToFavorite(home)}
          >
            Add to favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeCard;
