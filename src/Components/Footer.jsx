import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaGithub, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4">
      <Container>
        <Row>
          <Col md={12} className="text-center m-4">
            <p>Get connected with us on social networks:</p>
            <FaFacebook className="mx-2" />
            <FaGoogle className="mx-2" />
            <FaTiktok className="mx-2" />
            <FaGithub className="mx-2" />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="">
            <h5>Sun Solutions & Co.</h5>
            <p className="w-75">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Col>
          <Col md={6} className="">
            <Row>
              <Col md={6}>
                <h5>PRODUCTS</h5>
                <ul className="list-unstyled">
                  <li>MDBootstrap</li>
                  <li>MDWordPress</li>
                  <li>BrandFlow</li>
                  <li>Bootstrap Angular</li>
                </ul>
              </Col>
              <Col md={6}>
                <h5>CONTACT</h5>
                <p>📍 Athens, Fedriadon 120, 113 64</p>
                <p>✉️ info@example.com</p>
                <p>📞 +30 6932462414</p>
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
