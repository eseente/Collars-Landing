import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as LeftArrowIcon } from '../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/icons/right-arrow.svg';
import TestimonialCard from '../../components/TestimonialCard';
import './styles.css'; 
import theme from '../../theme';

const Testimonials = ({ data }) => {
  const scrollRef = useRef(null);
  const chunk = (arr, size) => {
    return arr.reduce((acc, e, i) => {
      return (i % size ? acc[acc.length - 1].push(e) : acc.push([e])) && acc;
    }, []);
  };
  const groupedData = chunk(data, 3);
  const [index, setIndex] = useState(0);

  const goToPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goToNext = () => {
    if (index < groupedData.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="testimonials-first-container">
      <Container style={{maxWidth:"100%",display:'flex',flexDirection:'column'}}>
        <Row style={{ paddingBottom:'4%', justifyContent:'space-between',width:'90%',alignSelf:'center'}} className="d-flex justify-content-between align-items-center mb-4">
          <Col className='testimonials-title-container' md={5}>
            <h2 className='testimonials-title'><strong>Because they love us</strong></h2>
          </Col>
          <Col md={2} className="text-right">
            <LeftArrowIcon onClick={goToPrevious} style={{ cursor: 'pointer' }} />
            <RightArrowIcon onClick={goToNext} style={{ cursor: 'pointer' }} />
          </Col>
        </Row>
        <div style={{position:'absolute', background:theme.colors.yellowColor, bottom:'20%', left:'2%', right:'2%', height:'60%'}}>
        </div>
        <div className="testimonial-container-wrapper">
          <div className="testimonial-container" ref={scrollRef}>
            {data.map((card, idx) => (
              <div key={idx} className="testimonial-card-wrapper">
                <TestimonialCard title={card.title} description={card.text} author={card.name} Avatar={card.avatar} Logo={card.companyLogo} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;
