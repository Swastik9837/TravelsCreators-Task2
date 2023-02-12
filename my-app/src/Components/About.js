import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="hehe">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h2 className="text-center">About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              quas neque earum dolore nemo fugiat doloribus assumenda saepe
              reiciendis molestiae delectus. Laboriosam ducimus porro architecto
              voluptatem veritatis voluptas voluptatibus nobis quas. Reiciendis,
              pariatur voluptatum? Consequatur, sapiente deserunt magnam aperiam
              voluptates maxime, aut sequi officiis corrupti officia debitis
              veniam aliquam repudiandae?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
