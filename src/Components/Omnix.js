import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/Omnix.png'
import image from '../images/OMIX1.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo1 from '../images/Seeding Brains UI/logo.png'
import { Button } from 'react-bootstrap';
function Omnix() {
  return (
    <>
       <div className='header'>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img src={logo1} className="img-fluid" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#link">ABOUT US</Nav.Link>
                <Nav.Link href="#link">SERVICE</Nav.Link>
                <Nav.Link href="#link">COURSES</Nav.Link>
                <Nav.Link href="#link">CONTACT US</Nav.Link>
                <Button variant="danger">Search</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='omnix'>
       <div className='overlay'>
        <Container>
          <div className="">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Omnix</Breadcrumb.Item>
            </Breadcrumb>
            <h3 className='my-5'>OMNIX INTERNATIONAL</h3>
            <div className='home_logo my-5'>
              <img src={logo} width="420px" height="120px" alt="" />
            </div>
          </div>
          <h2>Overview</h2>
          <p>GET TRAINED FROM THE WORLD'S BEST TRAINERS IF YOU WANT A CAREER IN THE FIELD OF DESIGN & CONSTRUCTION  </p>
          <Button variant="danger">Apply Now</Button>

        </Container>
        </div>
      </div>
      <div className='offered'>
        <Container>
          <Row>
            <Col md="6">
              <div className=''>
                <h2 className='mb-3'>Qualifications Offered:</h2>
                <ul>
                  <li>1) BIM
                  </li>
                  <li>
                   2) FormIt
                  </li>
                  <li>
                   3) Infraworks
                  </li>
                  <li>4) Revit MEP</li>
                </ul>
              </div>
            </Col>
            <Col md="6">
            </Col>
          </Row>
          <p>Mode of Learning: Online / On Campus</p>
        </Container>
      </div>
   

</>
 )
 }

export default Omnix