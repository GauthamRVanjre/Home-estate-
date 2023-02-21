import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import No_image from "../images/no_image.jpg";

const HomeDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [HomeData, setHomeData] = useState({});

  /* This is a react hook that is used to get the id of the home from the url. and have removed the colon from from the id inorder to fetch data */
  let Homeid = useParams();
  Homeid = Homeid.id.slice(1);
  console.log("Home ID" + HomeData.id);

  /* This is a redux hook that is used to get the state of login status the redux store. */

  /* This is a function that is used to fetch the home details from the api. */
  const fetchHomeDetails = async () => {
    const res = await fetchApi(
      `${baseUrl}/properties/detail?externalID=${Homeid}`
    );
    console.log("Home Details");
    console.log(res);
    setHomeData(res);
    console.log(HomeData);

    setIsLoading(false);
    setError(false);
  };

  useEffect(() => {
    fetchHomeDetails();
  }, [Homeid]);

  if (isLoading) {
    return (
      <div className="App-header">
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (error) {
    return <h1 className="App-header">Something went wrong...</h1>;
  } else {
    return (
      <>
        <div key={HomeData.id} className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="home-img-container">
              <div className="img-container">
                <img
                  src={HomeData.photos ? HomeData.photos[0].url : `${No_image}`}
                  alt="Home pic"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-8">
            <div className="home-details">
              <h1>{HomeData.title}</h1>
              <p>{HomeData.description}</p>
              <h5>
                Price: {HomeData.price} AED
                {HomeData.rentFrequency ? `/${HomeData.rentFrequency}` : ""}
              </h5>

              <h5>Features: </h5>
              <div className="home-details-container">
                <span className="homeDetails">{HomeData.rooms} bedroom</span>
                <span className="homeDetails">{HomeData.baths} bathroom</span>
                <span className="homeDetails">{HomeData.area} SQFT</span>
                {HomeData.category?.length ? (
                  HomeData.category.map((category) => (
                    <span className="homeDetails">{category.name}</span>
                  ))
                ) : (
                  <span className="App-header">Found Nothing</span>
                )}
              </div>
              <h5 style={{ marginTop: "10px" }}>Amenities:</h5>

              <div className="home-details-container">
                {HomeData.amenities?.length ? (
                  HomeData.amenities?.map((item) =>
                    item?.amenities?.map((amenity) => (
                      <span className="homeDetails" key={amenity.text}>
                        {amenity.text}
                      </span>
                    ))
                  )
                ) : (
                  <span className="App-header">Found Nothing</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default HomeDetail;
