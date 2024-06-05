import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import './styles.css'

const Features = ({ data }) => {
  return (
    <section className="features-section py-2">
      <Container className="text-center">
        <Row className="features-row">
          {data.map((feature, index) => (
            <Col key={index} md={4} className="feature-col">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.text}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;
