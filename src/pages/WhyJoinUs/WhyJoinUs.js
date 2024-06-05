import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ReactComponent as VideoDeco } from '../../assets/deco-video.svg';
import { ReactComponent as VideoCover } from '../../assets/video-cover.svg';
import { ReactComponent as CompleteIcon } from '../../assets/icons/complete.svg';
import { ReactComponent as GreenDot } from '../../assets/green-dot.svg';
import './styles.css'

const WhyJoinUs = () => {
  return (
    <div className="why-join-us">
      <Container className="why-join-us-container">
        <Row className="d-flex justify-content-around" style={{ width: '100%' }}>
          <Col md={6} style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 32 }}>
            <div className='why-join-us-text-container'>
              <h1 className="why-join-us-header">Why join us</h1>
              <p><CompleteIcon className="why-join-us-icon" />Est et in pharetra magna adipiscing ornare aliquam.</p> 
              <p><CompleteIcon className="why-join-us-icon" />Tellus arcu sed consequat ac velit ut eu blandit.</p> 
              <p><CompleteIcon className="why-join-us-icon" />Ullamcorper ornare in et egestas dolor orci.</p>
              <Button className="why-join-us-button" href="#signup">Sign up now</Button>
            </div>
          </Col>
          <Col style={{alignSelf:"center", alignItems:"center"}} md={6}>
            <div className="why-join-us-video">
              <VideoDeco className="video-deco" />
              <VideoCover className="video-cover" />
              <iframe 
                className="iframe-video"
                src="https://www.youtube.com/embed/UEec_EbJgfU" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Why Join Us Video"
              ></iframe>
              <GreenDot className="green-dot" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyJoinUs;