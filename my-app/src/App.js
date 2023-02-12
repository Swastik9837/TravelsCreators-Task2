import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import HotelDescription from "./Components/HotelDescription";
import OtherFacilities from "./Components/OtherFacilities";
import Home from "./Components/Home";
import About from "./Components/About";
import HotelPhoto from "./Components/HotelPhoto";
// import HotelPhoto from "./Components/HotelPhoto";

import Footer from "./Components/Footer";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState("home");

  const handleHomeClick = () => {
    setCurrentComponent("home");
  };

  const handleHotelDescriptionClick = () => {
    setCurrentComponent("hotelDescription");
  };

  const handleHotelDetailsClick = () => {
    setCurrentComponent("OtherFacilities");
  };
  // const handlePhotoClick = () => {
  //   setCurrentComponent("HotelPhoto");
  // };
  const handlePhoto = () => {
    setCurrentComponent("HotelPhoto");
  };

  const handleAboutClick = () => {
    setCurrentComponent("about");
  };

  const NavbarStyle = {
    backgroundColor: "lightgrey",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1,
  };

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar bg="lightgrey" expand="lg" style={NavbarStyle}>
        <Navbar.Brand
          href="#"
          style={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Hotel Website
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Nav.Link onClick={handleHomeClick} style={{ marginRight: "1rem" }}>
              Home
            </Nav.Link>
            <Nav.Link
              onClick={handleHotelDescriptionClick}
              style={{ marginRight: "1rem" }}
            >
              Hotel Description
            </Nav.Link>
            <Nav.Link
              onClick={handleHotelDetailsClick}
              style={{ marginRight: "1rem" }}
            >
              Other Facilities
            </Nav.Link>
            {/* <Nav.Link
              onClick={handlePhotoClick}
              style={{ marginRight: "1rem" }}
            >
              Hotel Photos
            </Nav.Link> */}
            <Nav.Link onClick={handlePhoto} style={{ marginRight: "1rem" }}>
              Hotel Photos
            </Nav.Link>

            <Nav.Link onClick={handleAboutClick}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div
        style={{
          marginTop: "56px",
          minHeight: "100vh",
          display: "flex",
          flex: "1",
        }}
      >
        {currentComponent === "home" && <Home />}

        {currentComponent === "hotelDescription" && <HotelDescription />}
        {currentComponent === "OtherFacilities" && <OtherFacilities />}
        {/* {currentComponent === "HotelPhoto" && 
        <HotelPhoto />} */}
        {currentComponent === "HotelPhoto" && <HotelPhoto />}
        {currentComponent === "about" && <About />}
      </div>
      <Footer
        style={{
          backgroundColor: "lightgrey",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </div>
  );
};
export default App;
