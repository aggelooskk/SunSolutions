import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaGithub, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4">
      <Container>
        <Row>
          <Col md={12} className="text-center m-4">
            <p style={{ fontFamily: "monospace" }}>
              Get connected with us on social networks:
            </p>
            <FaFacebook className="mx-2" size={25} />
            <FaGoogle className="mx-2" size={25} />
            <FaTiktok className="mx-2" size={25} />
            <FaGithub className="mx-2" size={25} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h5 style={{ fontFamily: "monospace" }}>Sun Solutions & Co.</h5>
            <p className="w-75 rfs-5" style={{ fontFamily: "sans-serif" }}>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <h5 style={{ fontFamily: "monospace" }}>PRODUCTS</h5>
                <ul
                  className="list-unstyled"
                  style={{ fontFamily: "sans-serif" }}
                >
                  <li>Eurostar Sole</li>
                  <li>Eurostar Fino</li>
                  <li>Eco</li>
                </ul>
              </Col>
              <Col md={6}>
                <h5 style={{ fontFamily: "monospace" }}>CONTACT</h5>
                <ul
                  className="list-unstyled m-0"
                  style={{ fontFamily: "sans-serif" }}
                >
                  <li>📍 Athens, Fedriadon 120, 113 64</li>
                  <li>✉️ info@example.com</li>
                  <li>📞 +30 6932462414</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; 2025 Copyrights</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
