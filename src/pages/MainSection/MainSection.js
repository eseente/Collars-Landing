import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import theme from '../../theme';
import { ReactComponent as SneakerIcon } from '../../assets/sneaker.svg'; 
import { ReactComponent as PlayIcon } from '../../assets/play-circle.svg'; 
import { ReactComponent as BackgroundSVG } from '../../assets/small-rectangle.svg';
import './styles.css'

const MainSection = () => {
  return (
    <Container className='main-section-container'>
      <BackgroundSVG className='main-section-bg-image' />
      <Row className="align-items-center justify-content-center">
        <Col md={8} className='main-section-text-col'>
          <h1 className="main-section-title">Collectible Sneakers</h1>
          <p className="main-section-text">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
          <div className='main-section-buttons'>
          <Button style={{ backgroundColor: 'transparent', color: theme.colors.textTitle, borderWidth:1.5, borderRadius:10, borderColor: theme.colors.textTitle, fontWeight: '600'}} href="#signup">Sign up now</Button>
          <Button style={{ backgroundColor: 'transparent',border:'none',color:theme.colors.textTitle,fontWeight:'600'}}>            
            <PlayIcon style={{ width: '32px' }} />
              Watch Demo
          </Button>
          </div>
        </Col>
        <Col md={4} style={{ textAlign: 'center' }}>
          <div >
            <SneakerIcon style={{ width: '100%' }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default MainSection;
