import React from 'react';
import { Container, Row, Col, Card, ProgressBar, ListGroup, Navbar, Nav } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className="bg-light min-vh-100">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container fluid>
          <Navbar.Brand href="#">EcoNova Admin</Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          <Col md={2} className="bg-white shadow-sm border-end p-3">
            <Nav defaultActiveKey="/dashboard" className="flex-column">
              <Nav.Link href="/dashboard">Overview</Nav.Link>
              <Nav.Link href="/analytics">Analytics</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/settings">Settings</Nav.Link>
            </Nav>
          </Col>

          <Col md={10} className="p-4">
            <h3 className="mb-4">Dashboard Overview</h3>
            <Row className="g-4 mb-4">
              {[
                { title: 'Total Users', value: '1,250' },
                { title: 'Monthly Revenue', value: '$12,500' },
                { title: 'Tickets Open', value: '34' },
              ].map((item, index) => (
                <Col md={4} key={index}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.value}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <Row className="g-4">
              <Col md={6}>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>Recent Activity</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>New user registered</ListGroup.Item>
                      <ListGroup.Item>System update completed</ListGroup.Item>
                      <ListGroup.Item>New ticket received</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>System Status</Card.Title>
                    <p>Server Load</p>
                    <ProgressBar now={60} label="60%" />
                    <p className="mt-3">Storage Usage</p>
                    <ProgressBar variant="success" now={40} label="40%" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
