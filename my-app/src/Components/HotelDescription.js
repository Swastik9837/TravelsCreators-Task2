import React from "react";
import axios from "axios";
import "./HotelDescription.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL =
  "https://apidojo-booking-v1.p.rapidapi.com/properties/get-hotel-photo";

const HotelDescription = () => {
  const [hotelDescription, setHotelDescription] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchDescription = () => {
    const options = {
      method: "GET",
      url: "https://apidojo-booking-v1.p.rapidapi.com/properties/get-description",
      params: {
        hotel_ids: "1950932",
        check_out: "2019-03-15",
        languagecode: "en-us",
        check_in: "2019-03-13",
      },
      headers: {
        "X-RapidAPI-Key": "362e21cf47mshfd22b99b74b5829p1c1a03jsna554aeb5f08c",
        "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
      },
    };
    setIsLoading(true);
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setHotelDescription(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchDescription();
  }, []);

  return (
    <div className="hotel-description">
      <h2>Hotel Description</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <p>
          {hotelDescription.map((descr, index) => {
            const { description } = descr;

            return <li key={index}>{description}</li>;
          })}
        </p>
      )}
    </div>
  );
};

export default HotelDescription;
