import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221199392-bf2639f5f6c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0',
        }}
      >
        <Container className="text-center heading-con">
          <h1 className="display-4 fw-bold">About EcoNova</h1>
          <p className="lead">Innovating for a sustainable tomorrow.</p>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-2">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img
              src="https://plus.unsplash.com/premium_photo-1661277604122-4324e519402a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="EcoNova team at work"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-3">Who We Are</h2>
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
        </Row>

        {/* Features Section */}
        <Row className="text-center mb-5">
          {[
            {
              icon: '🌱',
              title: 'Eco Innovation',
              desc: 'We create green tech that makes an impact.',
            },
            {
              icon: '📊',
              title: 'Data-Driven',
              desc: 'We leverage insights to shape our strategies.',
            },
            {
              icon: '🌍',
              title: 'Global Impact',
              desc: 'We work with clients across the world to scale sustainability.',
            },
          ].map((item, idx) => (
            <Col md={4} key={idx}>
              <Card className="border-0 shadow-sm p-4 h-100">
                <div style={{ fontSize: '2rem' }}>{item.icon}</div>
                <h5 className="mt-3">{item.title}</h5>
                <p>{item.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Mission, Vision, Values */}
        <Row className="text-center mb-5">
          <Col md={4}>
            <h5>🌿 Our Mission</h5>
            <p>Empowering communities and companies through sustainable innovation.</p>
          </Col>
          <Col md={4}>
            <h5>🚀 Our Vision</h5>
            <p>A future where every solution protects the planet and improves lives.</p>
          </Col>
          <Col md={4}>
            <h5>🤝 Our Values</h5>
            <p>Integrity, innovation, community, and respect for nature.</p>
          </Col>
        </Row>

        {/* CTA */}
        <Row className="text-center py-4 bg-light rounded shadow-sm">
          <Col>
            <h4 className="mb-3">Join the EcoNova Movement</h4>
            <p>Be part of a greener, smarter future with us.</p>
            <Button variant="success" size="lg">
              Get Involved
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
