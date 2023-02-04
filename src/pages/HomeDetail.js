import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import No_image from "../images/no_image.jpg";

const HomeDetail = () => {
  let Homeid = useParams();
  Homeid = Homeid.id.slice(1);
  console.log(Homeid);
  const [HomeData, setHomeData] = useState({});

  const fetchHomeDetails = async () => {
    const res = await fetchApi(
      `${baseUrl}/properties/detail?externalID=${Homeid}`
    );
    console.log("Home Details");
    console.log(res);
    setHomeData(res);
    console.log(HomeData);
  };

  useEffect(() => {
    fetchHomeDetails();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="home-img-container">
            <div className="img-container">
              <img
                src={HomeData.photos ? HomeData.photos[0].url : `${No_image}`}
                alt="Home pic"
              />
            </div>
            <div className="fav-btn-container">
              <button className="btn btn-primary">Add to Favorites</button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-8">
          <div className="home-details">
            <h1>{HomeData.title}</h1>
            <p>{HomeData.description}</p>
            <h5>Price: {HomeData.price} AED</h5>

            <h5>Features: </h5>
            <div className="home-details-container">
              <span className="homeDetails">{HomeData.rooms} bedroom</span>
              <span className="homeDetails">{HomeData.baths} bathroom</span>
              <span className="homeDetails">{HomeData.area} SQFT</span>
              {HomeData.category?.length
                ? HomeData.category.map((category) => (
                    <span className="homeDetails">{category.name}</span>
                  ))
                : ""}
            </div>
            <h5 style={{ marginTop: "10px" }}>Amenities:</h5>

            <div className="home-details-container">
              {HomeData.amenities?.length
                ? HomeData.amenities?.map((item) =>
                    item?.amenities?.map((amenity) => (
                      <span className="homeDetails" key={amenity.text}>
                        {amenity.text}
                      </span>
                    ))
                  )
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDetail;