import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/UOB.png'
import image from '../images/UOB1.jpg'
import { Col, Row } from 'react-bootstrap';
import images from '../images/UOB2.jpg'
import logo1 from '../images/Seeding Brains UI/logo.png'
import { Button } from 'react-bootstrap';

function Universityob() {
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
              <Breadcrumb.Item active>UNIVERSITY OF BOLTON</Breadcrumb.Item>
            </Breadcrumb>
            <h3 className='my-5'>UNIVERSITY OF BOLTON</h3>
            <div className='home_logo my-5'>
              <img src={logo} width="420px" height="120px" alt="" />
            </div>
          </div>
          <h2>Overview</h2>
          <p>IMMIGRATION AND WORK PLACEMENT OPPORTUNITIES IN THE UK WHEN YOU COMPLETE YOUR MASTERS WITH UNIVERSITY OF BOLTON</p>
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
                  <li>Combination Program (Level 7 Strategic Diploma + MBA)  </li>
                 
                </ul>
              </div>
            </Col>
            <Col md="6">
            </Col>
          </Row>
          <p>Mode of Learning: Online/ On Campus</p>
        </Container>
      </div>
      <div className='Masters'>
        <Container>
      <h2 className="mt-3">Key Highlights</h2>
          <Row className="mt-3">
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>1) Flexible Intakes</li>
                  <li>2) Flexible Mode of Study</li>
                  <li>3) Assignment Based Assessment</li>
                  <li>4) Doubt Sessions</li>
                  <li>5) Real Time Case Studies</li>
                </ol>
              </div>
            </Col>
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>6) Industry Expert Live Session</li>
                  <li>7) Career Assistance</li>
                  <li>8) Duration - 2 years</li>
                  <li>9) Credits - 180 </li>
                </ol>
              </div>

            </Col>
            <Col md="12">
              <div className='entry'>
                <h3>
                  Entry Requirements
                </h3>
                <p>These qualifications provide a flexible route for learners who have already achieved management qualifications at a lower level as well as for learners who do not have business or management qualifications, but may have qualifications in other areas and/or prior management experience in the work place.</p>
                <ul>
                    <li>Age: 19 +</li>
                     <li>A first degree in business, management or related subject</li>
                     <li>A level 6 qualification, for example an ATHE Level 6 Diploma in Management</li>
                     <li>May also have relevant work experience</li>
                  </ul>
           
              </div>
            </Col>
          </Row>
          <div className='my-4'>
            <h3>Course Overview</h3>
            <p>The Degree prepares students for a variety of vocations and includes important management topics like finance, human resources, marketing, and personal development. Additionally, it gives students access to top-up MBA programs at our Bolton University Campus in the UK. The qualification, which many 
              see as a flagship offering, normally requires 9 months of full-time study to complete.</p>
          </div>
          <div className='Instructors'>
          <h4>Instructor: <a href="https://rb.gy/1aaggv">https://rb.gy/1aaggv</a></h4>
            </div>

            <h3>Program Structure:</h3>
           <div className="program">
                  
                  <h4> - Year 1 Core Units: Level 7 Strategic Management & Leadership Diploma</h4>
                <Row>
                  <Col md={12}>
                  <ul>
                    <li>Strategic Planning</li>
                    <li>Finance for Strategic Managers</li>
                    <li>Research for Strategic Development</li>
                    <li>Organisational Behaviour</li>
                  
                    <li>Personal Development for Leadership and Strategic Management</li>
                    <li>International Business Environment</li>
                    <li>International Marketing</li>
                    <li>Corporate Communication Strategies</li>
                  </ul>
                  </Col>
                </Row>
                
                  <h4> - Year 2 Core Units: MBA</h4>
                  <Row>
                    <Col md={12}>
                    <ol>
                    <li>Leadership & Management</li>
                    <li>Marketing & Operations</li>
                    <li>Financial Mgmt & Decision Making</li>
                    <li>Strategy</li>
                 
                    <li> Organizational Behaviour</li>
                    <li>Strategic HRM</li>
                    <li>Professional Project</li>
                    <li>Academic Skills & Proffesional Practice</li>
                  </ol>
                      </Col>
                  </Row>
                 
                 
             </div>
             <h3 className='mt-4'>
             Benefits:
             </h3>
             <ul>
              <li>Dual Certification</li>
              <li>180 credits including exemptions</li>
              <li>Get the placement Year.</li>
              <li>Post Study Work Visa</li>
              <li>Spouse Visa Options available.</li>
             </ul>
             <h4 className="mt-4">Fee Structure: GBP 12000 (On Campus)</h4>
            </Container>
        </div>
    </>
  )
}

export default Universityob