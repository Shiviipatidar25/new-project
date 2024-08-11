import React from 'react';
import img1 from './images/shivani.png';

import '../style/Navbar1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






function Navbar1() {
  return (
    
    <>
    <div className='navbar'>
    <Container>
      
      <Row>
        <Col  md={8}>
        <img src={img1} alt=""/>
          
        </Col>
        <Col  md={4}>
        <h1>Hii<br/>
    I'm Shivani
    </h1>
    <h2>A Web Developer <br/>
    
    
    </h2>
    <h3>Transforming Ideas Into Engaging Online Experience</h3>
          
        </Col>
      </Row>
      </Container>

      </div>


















    
       
        
      





    



  
   

    
    
    
</>   
  )
}

export default Navbar1