import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import HomeCard from "../components/HomeCard";
import { auth } from "../firebase";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Home = () => {
  const [rentalHomes, setRentalHomes] = useState([]);
  const [buyingHomes, setBuyingHomes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const isLoggedIn = useSelector((state) => state.isLogin);

  useEffect(() => {
    const request = axios.CancelToken.source();
    const fetchHomesDetails = async () => {
      const rentalHomesData = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002,6020&purpose=for-rent&hitsPerPage=6`
      );

      setRentalHomes(rentalHomesData.hits);
      const buyingHomesData = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002,6020&purpose=for-sale&hitsPerPage=6`
      );

      setBuyingHomes(buyingHomesData.hits);
      console.log(buyingHomes);
      setIsLoading(false);
      setError(false);
    };

    fetchHomesDetails();
    console.log("api CALL");

    return () => {
      request.cancel();
    };
  }, []);
  if (isLoading)
    return (
      <div className="App-header">
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  else if (error)
    return <h1 className="App-header">Something went wrong...</h1>;
  else
    return (
      <>
        <h1 className="homeList">
          Welcome, {isLoggedIn ? auth.currentUser.displayName : "anonymous"}
        </h1>
        <div style={{ marginTop: "40px" }} className="center-div">
          <Banner
            purpose="RENT A HOME"
            title1="Rental Homes for"
            title2="Everyone"
            desc1=" Explore from Apartments, builder floors, villas"
            desc2="and more"
            buttonText="Explore Renting"
            linkName="/rent"
            imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
          />
          <div className="homeList">
            <div className="row">
              {rentalHomes.map((rentalHome) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    <HomeCard home={rentalHome} />
                  </div>
                );
              })}
            </div>
          </div>
          <Banner
            purpose="BUY A HOME"
            title1=" Find, Buy & Own Your"
            title2="Dream Home"
            desc1=" Explore from Apartments, land, builder floors,"
            desc2=" villas and more"
            buttonText="Explore Buying"
            linkName="/buy"
            imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
          />

          <div className="homeList">
            <div className="row">
              {buyingHomes.map((buyingHome) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    <HomeCard home={buyingHome} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
};

export default Home;
