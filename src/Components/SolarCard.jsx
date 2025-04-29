import React from "react";
import { Card, Button } from "react-bootstrap";

function SolarCard({ name, description, image }) {
  return (
    <Card className="m-4 p-2 border-light shadow-sm" style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "70%", height: "50%", margin: "0 auto" }}
      />
      <Card.Body className="d-flex justify-content-center flex-column">
        <strong>
          <Card.Title style={{ fontFamily: "sans-serif" }}>{name}</Card.Title>
        </strong>
        <Card.Text style={{ fontFamily: "serif" }}>{description}</Card.Text>
        <Button variant="outline-dark">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default SolarCard;
