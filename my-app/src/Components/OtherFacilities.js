import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OtherFacilities.css";

const OtherFacilities = () => {
  const [facilities, setFacilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFacilities = () => {
    const options = {
      method: "GET",
      url: "https://apidojo-booking-v1.p.rapidapi.com/properties/get-facilities",
      params: { hotel_ids: "1950932", languagecode: "en-us" },
      headers: {
        "X-RapidAPI-Key": "362e21cf47mshfd22b99b74b5829p1c1a03jsna554aeb5f08c",
        "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
      },
    };
    setIsLoading(true);
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        const dataa = response.data;
        setFacilities(dataa);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <div className="facilities-container">
      <h2>Other Facilities</h2>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className="facilities-list">
          {facilities.map((item, index) => {
            const { facility_name } = item;
            return (
              <li key={index} className="facility-item">
                {<p>{facility_name}</p>}
              </li>
            );
          }, [])}
        </ul>
      )}
    </div>
  );
};

export default OtherFacilities;
