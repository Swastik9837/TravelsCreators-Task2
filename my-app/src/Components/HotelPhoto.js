import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HotelPhoto.css";
// import { Spinner } from "react-bootstrap";

const API_URL = "https://apidojo-booking-v1.p.rapidapi.com/properties/list";
const API_KEY = "362e21cf47mshfd22b99b74b5829p1c1a03jsna554aeb5f08c";

function HotelPhoto() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await axios.get(API_URL, {
        headers: {
          "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
        params: {
          offset: "3",
          arrival_date: "2023-03-22",
          departure_date: "2023-03-24",
          guest_qty: "1",
          dest_ids: "-3712125",
          room_qty: "1",
          search_type: "city",
          children_qty: "2",
          children_age: "5,7",
          search_id: "none",
          price_filter_currencycode: "USD",
          order_by: "popularity",
          languagecode: "en-us",
          travel_purpose: "leisure",
        },
      });

      setProperties(response.data.result);
      setLoading(false);
      console.log(properties);
    };

    fetchProperties();
  }, [properties]);
  return (
    <div className="BasicProperty container my-5">
      <h1 className="header text-center">Properties List</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {properties.map((ll, index) => {
            const {
              hotel_name,
              main_photo_url,
              checkin,
              address,
              children_age,
              children_qty,
              url,
              checkout,
            } = ll;
            return (
              <div className="col-md-4 mb-3" key={index}>
                <div className="card">
                  <img
                    src={main_photo_url}
                    className="card-img-top"
                    alt="Hotels Images"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{hotel_name}</h5>
                    <p className="card-text">Check-in: {checkin.from}</p>
                    <p className="card-text">Check-out: {checkout.until}</p>
                    <p className="card-text">Address: {address}</p>
                    <p className="card-text">
                      More Info: <a href={url}>Click</a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default HotelPhoto;
