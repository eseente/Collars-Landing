import React from 'react';
import {  Card, Button } from 'react-bootstrap';
import { ReactComponent as ShoppingIcon } from '../assets/icons/shopping-cart.svg';
import theme from '../theme';

function BestOfCard({ image, title, description }) {
    return (
        <Card className="text-left" style={{ width: '16.5rem', margin: 'auto', boxShadow: '0 6px 8px rgba(255,255,255,.5)', padding:0, backgroundColor: theme.colors.darkBlue }}>
            <Card.Header style={{ padding:0, overflow: 'hidden', height: '150px', width: '100%', display:'flex', alignItems:'center' }}>
                {image}
            </Card.Header>
            <Card.Body style={{color:"white"}}>
                <Card.Title style={{fontSize:20,fontWeight:700}}>{title}</Card.Title>
                <Card.Text style={{fontSize:14,fontWeight:400}}>{description}</Card.Text>
                <Button style={{width:'100%',backgroundColor:'transparent',borderColor:'white',borderWidth:2,fontSize:16}} variant="primary"><ShoppingIcon/> Buy Now</Button>
            </Card.Body>
        </Card>
    );
}


export default BestOfCard;
