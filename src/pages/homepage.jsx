
import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import Product from '../components/productcard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Homepage() {
    const[products,setProduct]=useState([])
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
      .then(res=>setProduct(res.data))
},[])
  return (
    <>
         <Container>
          <Row>
          {products.map((item)=>{
            return(
            <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Product image={item.image} title={item.title} description={item.description} price={item.price} id={item.id}/>
            </Col>
            )})}
          </Row>
        </Container>
      
    </>
          )
        }


export default Homepage
