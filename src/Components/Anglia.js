import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Row, Col} from 'react-bootstrap'
import logo from '../images/ARU.png'
import Angliaimage from '../images/ARU-01.png'
import imagess from '../images/ARU-02.png'
function Anglia() {
  return (
    <>
    <div className='Anglia'>
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
    <div class="text-right ">
        <img src={logo} width="420px" height="120px"/>
    </div>
    <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Anglia Ruskin University</Breadcrumb.Item>
        </Breadcrumb>

        <h3 className='my-5'>WANT THE LIFE IN CAMBRIDGE AND HAVE A CHANCE TO WORK IN THE UK, JOIN ARU THE UNIVERSITY IN CAMBRIDGE, AND WITH ADDITIONAL BENEFITS OF CAMBRIDGE UNIVERSITY</h3>
    <div className=''>
        <img src={Angliaimage} className='img-fluid my-5'/>
    </div>
    </Container>
    </div>
    <div className='Anglia-world'>
      <Container>
        <p><b>Certificates: </b> Bachelors & Masters</p>
        <p><b>Instructor:</b> <a href=" https://london.aru.ac.uk/about-us/academic-staff"> https://london.aru.ac.uk/about-us/academic-staff</a></p>
        <p><b>Program Structure:</b> BA (Hons) Management (Top-Up) </p>
        <p><b>Unit Structure: </b> </p>
           <ol>
                <li>Strategic Management</li>
                <li>Work Based Major Project</li>
                <li>Work Based Project Impact and Review</li>
                <li>Reflections on Practice and Career Progression</li>
           </ol>
           <Row>
            <Col md={6}>
              <img src={imagess} className='img-fluid mb-3'/>
            </Col>
            <Col md={6} className="py-5">
               <p><b>MBA Top Up</b> <br/>
                Here you will undertake a major project that focuses on your understanding and execution of entrepreneurial management in an area of specific interest to your or your organisation, such as:</p>
               <ul>
                  <li>An applied or engaged research project</li>
                  <li>An enterprise consultancy project</li>
                  <li>Taking a new business proposition through to proof of concept</li>
                  <li>This is a 15,000 words dissertation</li>
               </ul>
            </Col>
           </Row>
           
         
          <p><b>Benefits:</b></p>
          <ul>
            <li>Dual Certification</li>
            <li>Post Study Work Visa</li>
          </ul>
          <p><b>Mode of Study:</b> Online / Fulltime</p>
          <p><b>Fees:</b> Online: GBP 3500<br/>Fulltime: GBP 15,000 </p>
      </Container>
    </div>
    </>
  )
}

export default Anglia