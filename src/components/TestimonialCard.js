import React from 'react';
import { Card, Container } from 'react-bootstrap';

const TestimonialCard = ({ title, description, author, Avatar, Logo }) => {
  return (
    <Card style={{ width: '18rem',height: '18rem', backgroundColor: '#f8f9fa', border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Card.Body>
        <Logo style={{width:100}}></Logo>
        <Card.Text style={{paddingTop:5, paddingBottom:5}}>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ backgroundColor:'transparent', border:"none", flexDirection:'row', display: 'flex', width:'100%', height:'100%'}} className="text-muted">
          <Avatar style={{width:100}}/>
          <Container>
            <p style={{fontSize:16, textAlign:'start', alignSelf:'center', verticalAlign:'center'}}>{author}</p>
            <p style={{fontSize:14, textAlign:'start'}}>{title}</p>
          </Container>
        </Card.Footer>
    </Card>
  );
};

export default TestimonialCard;
