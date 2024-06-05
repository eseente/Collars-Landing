import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import "./styles.css"

function FeatureCard({ icon, title, description }) {
  return (
    <Card style={{ width: '21rem', margin: '1rem', border:'none', backgroundColor: 'transparent' }}>
      <Card.Body>
        <Row className="align-items-center">
          <Col style={{ display:'flex', flexDirection:'column', width:'100%', height:'100%', alignItems:'start', justifyContent:'start'}} xs={8}>
            <Container className='feature-card-icon'>{icon}</Container>
            <Container >
                <Card.Title className='feature-texts'>{title}</Card.Title>
                <Card.Text className='feature-texts'>{description}</Card.Text>
            </Container>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default FeatureCard;
