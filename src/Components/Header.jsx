import React from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import panels from "../assets/panels.png";

const Header = () => {
  return (
    <div className="relative h-screen w-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${panels})`, height: "100vh" }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <Navbar
        expand="lg"
        className="fixed-top m-3 bg-transparent text-white"
        style={{ zIndex: 10 }}
      >
        <Navbar.Brand
          href="/"
          className="text-lg sm:text-2xl font-bold uppercase"
        >
          Sun Solutions & Co.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="sm:flex justify-end">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="hover:text-gray-300">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="hover:text-gray-300">
              About
            </Nav.Link>
            <Nav.Link href="#" className="hover:text-gray-300">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="text-lg sm:text-2xl font-bold uppercase">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </div>
  );
};

export default Header;
