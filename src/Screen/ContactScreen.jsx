import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function ContactScreen() {
  return (
    <>
      <NavBar />
      <Container className="m-5 w-75">
        <h1>Contact Us</h1>
        <Form>
          <Form.Group controlId="formFirstName" className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" />
          </Form.Group>

          <Form.Group controlId="formLastName" className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formPhoneNumber" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" />
          </Form.Group>

          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default ContactScreen;
