import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import theme from '../../theme';
import './styles.css'

function NavbarComponent() {
  return (
    <Navbar className="navbar-container" expand="lg">
      <Container>
      <Navbar.Brand style={{color: theme.colors.textTitle, fontWeight: 'bold', fontSize: 32}} href="#home">Collers</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto"/>
        <Nav>
          <Nav.Link style={{color: theme.colors.textTitle, fontWeight: '600'}} href="#products">Products</Nav.Link>
          <Nav.Link style={{color: theme.colors.textTitle, fontWeight: '600'}} href="#solutions">Solutions</Nav.Link>
          <Nav.Link style={{color: theme.colors.textTitle, fontWeight: '600'}} href="#pricing">Pricing</Nav.Link>
          <Nav.Link style={{color: theme.colors.textTitle, fontWeight: '600'}} href="#resources">Resources</Nav.Link>
          <Nav.Link style={{color: theme.colors.textTitle, fontWeight: '600'}} href="#login">Log In</Nav.Link>
          <Button style={{ backgroundColor: 'transparent', color: theme.colors.textTitle, borderWidth:1.5, borderRadius:10, borderColor: theme.colors.textTitle, fontWeight: '600'}} href="#signup">Sign up now</Button>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
