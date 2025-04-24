import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="display-4 fw-bold">EcoNova: Empowering a Greener Future</h1>
          <p className="lead mt-3">
            We combine innovation and sustainability to deliver eco-conscious solutions that drive positive change
            for businesses, communities, and the planet.
          </p>
          <Button variant="success" size="lg" href="/about" className="mt-3">Learn More About Us</Button>
        </Col>
        <Col md={6}>
          <img
            src="https://plus.unsplash.com/premium_photo-1663051138877-c6471214ae11?q=80&w=2291&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="EcoNova green technology"
            
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
