import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 
import theme from '../../theme';
import { ReactComponent as CollectionImage2 } from '../../assets/collection-image2.svg'; 
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg'; 
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-icon.svg'; 
import { ReactComponent as GuardIcon } from '../../assets/icons/guard-icon.svg'; 
import { ReactComponent as RocketIcon } from '../../assets/icons/rocket.svg'; 
import { ReactComponent as ScreenIcon } from '../../assets/icons/screen.svg'; 
import { ReactComponent as PinterestIcon } from '../../assets/icons/pinterest.svg'; 
import { ReactComponent as SettingIcon } from '../../assets/icons/settings-alt.svg'; 

const Collection = () => {
  return (
    <Container className="collection-container">
      <Row className="justify-content-center collection-row">
        <Col md={12} style={{alignItems:'center',justifyContent:'center'}}>
          <h1 className="collection-title" style={{color: theme.colors.darkBlue, fontWeight:'bold'}}>Grow your collection</h1>
          <p className="collection-text">Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
        </Col>
      </Row>
      <Row className="align-items-start collection-row">
        <Col  md={3}>
          <div className="collection-buttons">
            <div className='content-box'>
               <Button key={0} className="collection-button1"><SearchIcon style={{margin:10}}/>Bibendum tellus <ArrowIcon className='arrow-icon'/></Button>
              <Button key={1} className="collection-button"><GuardIcon style={{margin:10}}/>Cras eget</Button>
              <Button key={2} className="collection-button"><RocketIcon style={{margin:10}}/>Dolor pharetra</Button>
              <Button key={3} className="collection-button"><ScreenIcon style={{margin:10}}/>Amet, fringilla</Button>
              <Button key={4} className="collection-button"><PinterestIcon style={{margin:10}}/>Amet nibh</Button>
              <Button key={5} className="collection-button"><SettingIcon style={{margin:10}}/>Sed velit</Button> 
            </div>
          </div> 
        </Col>
        <Col md={9}>       
          <CollectionImage2 className="collection-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default Collection;