import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import HotelPhoto from "./HotelPhoto";

const Home = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckIn(e.target.checkIn.value);
    setCheckOut(e.target.checkOut.value);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={12}>
          <h1 className="text-center mb-5">Welcome to Our Hotel Booking App</h1>
        </Col>
        {!checkIn && !checkOut ? (
          <Col lg={6} className="offset-lg-3">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formCheckIn" className="mb-3">
                <Form.Label>Check-in</Form.Label>
                <Form.Control type="date" name="checkIn" />
              </Form.Group>
              <Form.Group controlId="formCheckOut" className="mb-3">
                <Form.Label>Check-out</Form.Label>
                <Form.Control type="date" name="checkOut" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>

            <p className="text-center">
              Book your stay with us and experience luxury like never before.
            </p>
          </Col>
        ) : (
          <>
            <Col lg={12} className="mb-5">
              <HotelPhoto />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Home;
