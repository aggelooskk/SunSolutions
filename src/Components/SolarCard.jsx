import React from "react";
import { Card, Button } from "react-bootstrap";
import eurostar from "../assets/solars/eurostar.png";

const SolarCard = () => {
  return (
    <>
      <Card className="m-4 rounded-lg border-light" style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src={eurostar}
          style={{ width: "70%", height: "50%", margin: "0 auto" }}
        />
        <Card.Body className="d-flex justify-content-center flex-column">
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-dark">Learn More</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SolarCard;
