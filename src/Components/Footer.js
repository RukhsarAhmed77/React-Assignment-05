import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>EcoNova</h5>
            <p>Empowering a greener future through sustainable innovation.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <p>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>

            </p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} EcoNova. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
