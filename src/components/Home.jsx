import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/home.css';
    
//import img2 from './images/pic.png'


function Home() {
  return (
    <>
    
        <Navbar expand="lg"style={{ color: 'red' }} className="sitenav" >
          <Container>
            <Navbar.Brand href="#home" className='drop1'>Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <NavDropdown title="Contact" id="basic-nav-dropdown">
                 
                  <NavDropdown.Item href="#action/3.2"style={{ color: 'red' }} className='drop1'>
                    Linkedin
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className='drop1'>E-mail</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4"style={{ color: 'red' }} className='drop1'>
                    Phone no.
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
       
    
    
    
    </>
   

  )
}

export default Home