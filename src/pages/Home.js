import React from 'react';

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaLeaf, FaRecycle, FaGlobeAmericas } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <Container fluid className="py-5 bg-light text-center text-lg-start">
        <Row className="align-items-center justify-content-center px-5">
          <Col lg={6}>
            <h1 className="display-2 fw-bold text-success">EcoNova</h1>
            <h2 className="display-6 text-secondary mb-3">Empowering a Greener Future</h2>
            <p className="lead fs-4 mt-4 text-dark">
              Innovation meets sustainability. We help businesses thrive with eco-friendly solutions that protect the planet.
            </p>
            <Button variant="success" size="lg" href="/about" className="mt-4 px-5 py-3 fs-5">
              Learn More About Us
            </Button>
          </Col>
          <Col lg={6} className="text-center mt-5 mt-lg-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1663051138877-c6471214ae11?q=80&w=2291&auto=format&fit=crop"
              alt="EcoNova green tech"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '600px', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>

      <Container className="py-5 bg-white">
        <h2 className="text-center fw-bold mb-4">What We Offer</h2>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body>
                <FaLeaf size={48} className="text-success mb-3" />
                <Card.Title>Renewable Energy</Card.Title>
                <Card.Text>Powering the future with solar, wind, and sustainable sources.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body>
                <FaRecycle size={48} className="text-success mb-3" />
                <Card.Title>Sustainable Design</Card.Title>
                <Card.Text>Eco-friendly products and packaging that reduce waste.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body>
                <FaGlobeAmericas size={48} className="text-success mb-3" />
                <Card.Title>Carbon Consulting</Card.Title>
                <Card.Text>Track, manage, and reduce your environmental impact.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-success text-white py-5">
        <Row className="justify-content-center text-center">
          <Col md={10}>
            <h2 className="fw-bold">Our Mission</h2>
            <p className="fs-4 mt-3">
              EcoNova is committed to creating a world where innovation and sustainability go hand-in-hand. Together,
              we can make a difference.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="py-5 text-center">
        <h2 className="fw-bold">Ready to Make a Difference?</h2>
        <p className="lead">Join us in building a greener, cleaner future for all.</p>
        <Button variant="outline-success" size="lg" href="/contact" className="mt-3 px-4 py-2">
          Contact Us
        </Button>
      </Container>
    </>
  );
};

export default Home;
