import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const team = [
    {
        name: 'Alice Green',
        role: 'CEO',
        img: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        name: 'Bob Leaf',
        role: 'CTO',
        img: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Charlie Roots',
        role: 'Sustainability Lead',
        img: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
];


const Team = () => {
    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">Meet Our Team</h2>
            <Row className="g-4">
                {team.map((member, i) => (
                    <Col md={4} key={i}>
                        <Card className="text-center p-3">
                            <Card.Img
                                variant="top"
                                src={member.img}
                                className="rounded-circle mx-auto"
                                style={{ width: '100px' }}
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/100?text=No+Image')}
                            />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>{member.role}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Team;
