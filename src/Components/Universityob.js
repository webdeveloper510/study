import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/UOB.png'
import image from '../images/UOB1.jpg'
import { Col, Row } from 'react-bootstrap';
import images from '../images/UOB2.jpg'

function Universityob() {
  return (
    <>
       <div className='Universityob'>
    <Navbar expand="lg" className='navbars'>
      <Container className='p-0'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">HOME </Nav.Link>
            <Nav.Link href="#link">ABOUT US</Nav.Link>
            <Nav.Link href="#link">SERVICE </Nav.Link>
            <Nav.Link href="#link">COURSES </Nav.Link>
            <Nav.Link href="#link">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <div class="text-right">
        <img src={logo} width="420px" height="120px" alt="" />
    </div>
    <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>University Of Bolton</Breadcrumb.Item>
        </Breadcrumb>

        <h3 className='mt-5'>
          IMMIGRATION AND WORK PLACEMENT OPPORTUNITIES IN THE UK WHEN YOU COMPLETE YOUR MASTERS WITH UNIVERSITY OF BOLTON
        </h3>
        <div className='my-4'>
        <img src={image} width="100%" height="600px" alt="" />
    </div>
    <h3> Qualification Offered: </h3>
    <p>Combination Program (Level 7 Strategic Diploma + MBA)</p>
    <h3>Mode of Learning: </h3>
    <p>Online/ On Campus</p>
    </Container>
    </div>
    <div className='Universityob-world'>
      <Container>
       
         
        <h3>Key Highlights </h3>
        <Row>
          <Col md={4}>
           <ul>
            <li>Flexible Intakes</li>
            <li>Flexible Mode of Study</li>
            <li>Assignment Based Assessment</li>
           </ul>
          </Col>
          <Col md={4}>
          <ul>
            <li>Doubt Sessions</li>
            <li>Real Time Case Studies</li>
            <li>Industry Expert Live Session</li>
           </ul>
          </Col>
          <Col md={4}>
            <ul>
              <li>Career Assistance</li>
              <li>Duration - 2 Year</li>
              <li>Credits - 180</li>
            </ul>
          </Col>
        </Row>
          <p><b>Title: </b> MBA Top-Up</p>
          <p><b>Duration: </b> 9 Months</p>
          <p><b>Trimesters:</b>  3</p>
          <p><b>Unit Structure:</b></p>
          <ol>
            <li>Leadership & Management</li>
            <li>Marketing & Operations</li>
            <li>Financial Mgmt & Decision Making</li>
            <li>Strategy</li>
            <li>Organizational Behaviour</li>
            <li>Strategic HRM</li>
            <li>Professional Project</li>
            <li>Academic Skills & Proffesional Practice</li>
          </ol>
          <Row className='my-3'>
            <Col md={6}>
                <img src={images} className="img-fluid" alt="" />
            </Col>
            <Col md={6}>
                <p><b>Benefits:</b></p>
                <ul>
                    <li>Students will get Dual Certification</li>
                    <li>Transcript will show 180 credits including exemptions</li>
                    <li>Student is getting the placement year</li>
                    <li>Students would be eligible for 1 year PSWV and additional 1 year extended visa by</li>
                    <li>paying 1000GBP to the university</li>
                    <li>Students are eligible for the Spouse visa for the partners</li>
                </ul>
            </Col>
          </Row>
          
          <p><b>Mode of Study: </b> Online</p>
          <p><b>Fees: </b> 9000 Pounds</p>
      </Container>
    </div>
    </>
  )
}

export default Universityob