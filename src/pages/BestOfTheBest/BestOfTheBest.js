import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BestOfCard from '../../components/BestOfCard';
import { ReactComponent as BackgroundSVG } from '../../assets/best-of-bg.svg';
import theme from '../../theme';
import './styles.css'

const BestOfTheBest = ({ data }) => {
  return (
    <div className="best-of-the-best" style={{ position: 'relative', width: '100%', backgroundColor: theme.colors.darkBlue }}>
      <Container style={{ display:"flex",position: 'relative', zIndex: 1, padding: '20px 0', flexDirection:'column', overflow:'hidden' }}>
        <BackgroundSVG className='best-bg-image' />
        <div className='best-header-container'>
          <h2  className="best-title">The best of the best</h2>
          <Button className="signup-button"style={{ backgroundColor: 'transparent', borderColor: 'white', borderWidth: 2, fontSize: 16 }} >Sign up now</Button>
        </div>
        <Row style={{overflow:'hidden',paddingBottom: 30}} className="justify-content-between g-0">
          {data.map((product, index) => (
            <Col className="best-card-container" md={4} key={index}>
              <BestOfCard image={product.image} title={product.title} description={product.text} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default BestOfTheBest;
