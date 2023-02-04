import axios from "axios";
import React, { useState, useEffect } from "react";
import HomeCard from "../components/HomeCard";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const RentProperty = () => {
  const [rentalHomes, setRentalHomes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const request = axios.CancelToken.source();
    const fetchHomesDetails = async () => {
      const rentalHomesData = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002,6020&purpose=for-rent&hitsPerPage=30`
      );

      setRentalHomes(rentalHomesData.hits);
      setIsLoading(false);
      setError(false);
    };

    fetchHomesDetails();
    console.log("api CALL- RentProperty");

    return () => {
      request.cancel();
    };
  }, []);

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
        <h1 style={{ marginTop: "10px" }} className="App-header">
          Rent a property
        </h1>
        <div className="homeList">
          <div className="row">
            {rentalHomes.map((rentalHome) => (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <HomeCard home={rentalHome} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default RentProperty;
