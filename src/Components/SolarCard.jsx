import React from "react";
import { Card, Button } from "react-bootstrap";

const SolarCard = ({ name, description, image }) => {
  return (
    <Card className="m-4 rounded-lg border-light" style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "70%", height: "50%", margin: "0 auto" }}
      />
      <Card.Body className="d-flex justify-content-center flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="outline-dark">Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default SolarCard;
