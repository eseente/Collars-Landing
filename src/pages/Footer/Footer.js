import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './styles.css'
import theme from '../../theme';
import { ReactComponent as GooglePlay } from '../../assets/goole-play.svg'; 
import { ReactComponent as AppStore } from '../../assets/app-store.svg'; 
import { ReactComponent as LanguageIcon } from '../../assets/icons/language.svg'; 

const Footer = () => {
  return (
    <footer style={{backgroundColor: theme.colors.darkBlue, color:'white', padding:'5%', fontSize:12, fontWeight:'400'}}>
      <Container className='footer-container'>
        <Row>
          <Col md={3} className='footer-col'>
            <h6>Product</h6>
            <ul className="list-unstyled">
              <li>Pricing</li>
              <li>Overview</li>
              <li>Browse</li>
              <li>Accessibility</li>
            </ul>
          </Col>
          <Col md={3} className='footer-col'>
            <h6>Solutions</h6>
            <ul className="list-unstyled">
              <li>Brainstorming</li>
              <li>Ideation</li>
              <li>Wireframing</li>
              <li>Research</li>
              <li>Design</li>
            </ul>
          </Col>
          <Col md={3} className='footer-col'>
            <h6>Support</h6>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>Developers</li>
              <li>Documentation</li>
              <li>Integrations</li>
              <li>Reports</li>
            </ul>
          </Col>
          <Col md={3} className='footer-app-col'>
            <h6>Get the App</h6>
            <Col style={{marginTop: 10}}>
              <AppStore style={{width:100}}/>
            </Col>
            <Col style={{ marginBottom:10}}>
              <GooglePlay style={{width:100}}/>
            </Col>
            <h6>Follow Us</h6>
            <div>
              <FaYoutube style={{fontSize:20}} className="social-icon" />
              <FaFacebookF style={{fontSize:20}} className="social-icon" />
              <FaTwitter style={{fontSize:20}} className="social-icon" />
              <FaInstagram style={{fontSize:20}} className="social-icon" />
              <FaLinkedin style={{fontSize:20}} className="social-icon" />
            </div>
          </Col>
        </Row>
        <hr style={{color:'#334155', height:5, borderWidth:4}}/>
        <Row className="footer-after-line-text">
          <Col md="auto" className="footer-after-line-text-left">
            <p>
              Collers © 2023. All rights reserved.
            </p>
          </Col>
          <Col md="auto" className="footer-after-line-text-right">
            <a href="#terms" className="text-decoration-none text-light mx-2">Terms</a>
            <a href="#privacy" className="text-decoration-none text-light mx-2">Privacy</a>
            <a href="#contact" className="text-decoration-none text-light mx-2">Contact</a>
            <span className="mx-2"><LanguageIcon style={{width:22, height:18, alignSelf:'center'}}/> EN</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
