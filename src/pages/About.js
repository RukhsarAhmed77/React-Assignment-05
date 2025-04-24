import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Who We Are?</h2>
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <p>
            At <strong>EcoNova</strong>, we believe sustainability and progress go hand in hand. Our mission is to
            create innovative, scalable solutions that support environmental responsibility while enhancing business
            value.
          </p>
          <p>
            Through data-driven technologies, green product development, and community-focused initiatives, we help
            organizations transition to a more sustainable and impactful future.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://plus.unsplash.com/premium_photo-1661277604122-4324e519402a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="EcoNova team at work"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h5>🌿 Our Mission</h5>
          <p>To empower communities and companies through sustainable innovation that protects and restores the planet.</p>
        </Col>
        <Col md={4}>
          <h5>🚀 Our Vision</h5>
          <p>A future where every solution contributes to environmental balance and societal well-being.</p>
        </Col>
        <Col md={4}>
          <h5>🤝 Our Values</h5>
          <p>Integrity, transparency, innovation, and a deep respect for nature.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
