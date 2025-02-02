import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Product(props) {
  
 return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} style={{height:"300px",width:"100%",ObjectFit:'contain'}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Link to={"/productdisplay/"+props.id}>
        <Button variant="warning">View Details</Button>
        </Link>
        
      </Card.Body>
    </Card>
  );
}


    export default Product