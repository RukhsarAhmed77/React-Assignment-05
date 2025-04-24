import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Pricing = () => {
  const plans = [
    {
      title: 'Starter',
      price: '$9/mo',
      features: [
        'Basic analytics tools',
        'Email support',
        'Single user access',
        'Limited cloud storage',
        'Community forums'
      ],
      buttonText: 'Get Started',
      variant: 'outline-success'
    },
    {
      title: 'Pro',
      price: '$29/mo',
      features: [
        'All core tools included',
        'Priority email & chat support',
        'Up to 5 team members',
        '5GB cloud storage',
        'Monthly performance reports',
        'Integration with 3rd-party apps'
      ],
      buttonText: 'Most Popular',
      variant: 'success'
    },
    {
      title: 'Enterprise',
      price: 'Contact Us',
      features: [
        'Unlimited access to all tools',
        'Dedicated account manager',
        'Custom-built dashboards',
        'Unlimited team members',
        'Advanced security features',
        '24/7 premium support',
        'Custom SLA & onboarding'
      ],
      buttonText: 'Contact Sales',
      variant: 'outline-dark'
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-3 fw-bold">Choose the Plan That Fits You</h2>
      <p className="text-center text-muted mb-5">
        Simple, transparent pricing for individuals, teams, and enterprises committed to sustainability.
      </p>
      <Row className="g-4">
        {plans.map((plan, idx) => (
          <Col md={6} lg={4} key={idx}>
            <Card className={`h-100 shadow-lg border-0 rounded-4 ${plan.title === 'Pro' ? 'bg-light border-success border-2' : ''}`}>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center fw-bold fs-4">{plan.title}</Card.Title>
                <h3 className="text-center my-3 text-success">{plan.price}</h3>
                <ul className="list-unstyled text-start mb-4 px-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">✔ {feature}</li>
                  ))}
                </ul>
                <div className="mt-auto text-center">
                  <Button variant={plan.variant} className="w-100">
                    {plan.buttonText}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pricing;
