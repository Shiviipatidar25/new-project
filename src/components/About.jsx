import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from './images/cartoon.jpg';




function About() {
  return (
    <>

      <Container>

        <Row>
          <Col md={4}>
            <img src={img2} alt=" " />

          </Col>
          <Col md={8}>
            <h1>Hii<br />
              I'm Shivani
            </h1>
            <h2>A Web Developer <br />


            </h2>
            <h3>Transforming Ideas Into Engaging Online Experience</h3>
            

          </Col>
        </Row>
      </Container>


    </>
  )
}

export default About