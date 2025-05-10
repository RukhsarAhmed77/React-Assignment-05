import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4">User Profile</h2>
      <Row>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                className="rounded-circle mb-3"
                style={{ width: '120px', height: '120px' }}
              />
              <h5>John Doe</h5>
              <p className="text-muted">Administrator</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5>Edit Profile</h5>
              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" defaultValue="John" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" defaultValue="Doe" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" defaultValue="john.doe@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control as="textarea" rows={3} defaultValue="Administrator at EcoNova." />
                </Form.Group>
                <Button variant="primary">Save Changes</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
