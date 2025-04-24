import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const jobListings = [
    {
        title: 'Sustainability Analyst',
        location: 'Remote',
        type: 'Full-time',
        description: 'Help us track and improve our environmental impact using cutting-edge data tools and research.'
    },
    {
        title: 'Frontend Developer',
        location: 'New York, NY',
        type: 'Hybrid',
        description: 'Work with React and modern UI libraries to build eco-friendly user experiences.'
    },
    {
        title: 'Marketing Coordinator',
        location: 'San Francisco, CA',
        type: 'Part-time',
        description: 'Drive our outreach strategy and share our story with eco-conscious communities around the globe.'
    },
    {
        title: 'Marketing Coordinator',
        location: 'San Francisco, CA',
        type: 'Part-time',
        description: 'Drive our outreach strategy and share our story with eco-conscious communities around the globe.'
    },
    {
        title: 'Backend Developer',
        location: 'New York, NY',
        type: 'Hybrid',
        description: 'Work with React and modern UI libraries to build eco-friendly user experiences.'
    },
    {
        title: 'Sustainability Analyst',
        location: 'Remote',
        type: 'Full-time',
        description: 'Help us track and improve our environmental impact using cutting-edge data tools and research.'
    },
    {
        title: 'Sustainability Analyst',
        location: 'Remote',
        type: 'Full-time',
        description: 'Help us track and improve our environmental impact using cutting-edge data tools and research.'
    },
    {
        title: 'Frontend Developer',
        location: 'New York, NY',
        type: 'Hybrid',
        description: 'Work with React and modern UI libraries to build eco-friendly user experiences.'
    },
    {
        title: 'Marketing Coordinator',
        location: 'San Francisco, CA',
        type: 'Part-time',
        description: 'Drive our outreach strategy and share our story with eco-conscious communities around the globe.'
    },
    {
        title: 'Marketing Coordinator',
        location: 'San Francisco, CA',
        type: 'Part-time',
        description: 'Drive our outreach strategy and share our story with eco-conscious communities around the globe.'
    },
    {
        title: 'Backend Developer',
        location: 'New York, NY',
        type: 'Hybrid',
        description: 'Work with React and modern UI libraries to build eco-friendly user experiences.'
    },
    {
        title: 'Sustainability Analyst',
        location: 'Remote',
        type: 'Full-time',
        description: 'Help us track and improve our environmental impact using cutting-edge data tools and research.'
    },
];

export default function Career() {
    return (
        <Container className="py-5">
            <h2 className="text-center mb-3 fw-bold">Join Our Team</h2>
            <p className="text-center text-muted mb-5 px-md-5">
                At <strong>EcoNova</strong>, we’re passionate about building a greener future through innovation and action.
                Explore exciting opportunities to make a meaningful impact.
            </p>
            <Row className="g-4">
                {jobListings.map((job, idx) => (
                    <Col md={6} lg={4} key={idx}>
                        <Card className="h-100 border-0 shadow-sm rounded-4">
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <Card.Title className="fw-semibold">{job.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        📍 {job.location} • 🕒 {job.type}
                                    </Card.Subtitle>
                                    <Card.Text className="text-secondary">{job.description}</Card.Text>
                                </div>
                                <div className="text-end">
                                    <Button variant="success" href="/apply" className="mt-3 w-100">
                                        Apply Now
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
