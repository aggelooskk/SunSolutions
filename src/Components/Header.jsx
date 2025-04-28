import React from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";

function Header() {
  return (
    <>
      <div className="relative h-screen w-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/panels.png)`,
            height: "100vh",
            zIndex: 1,
          }}
        ></div>
        <div
          className="absolute inset-0 bg-black/40"
          style={{ zIndex: 2 }}
        ></div>
        <Navbar
          expand="lg"
          className="m-3 bg-transparent text-white"
          style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 3 }}
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
              <Nav.Link href="/" className="hover:text-gray-300">
                Home
              </Nav.Link>
              <Nav.Link href="/contact" className="hover:text-gray-300">
                Contact
              </Nav.Link>
              <Nav.Link href="#" className="hover:text-gray-300">
                About
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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
