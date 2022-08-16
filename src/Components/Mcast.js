
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoHome from '../images/MCAST.png'
import telephone from '../images/MCAST2.jpg'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/Seeding Brains UI/logo.png'
import { Button } from 'react-bootstrap';

function Mcast() {
  return (
    <>
      <div className='header'>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img src={logo} className="img-fluid" /></Navbar.Brand>
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
      <div className='Credentials'>

        <Container>
          <div className="">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>MCAST</Breadcrumb.Item>
            </Breadcrumb>
            <h3 className='my-5'>GET A EUROPEAN DEGREE AND WORK OPPORTUNITIES IN THE EUROPEAN REGION </h3>
            <div className='home_logo my-5'>
              <img src={LogoHome} width="420px" height="120px" alt="" />
            </div>
          </div>
          <h2>Overview</h2>
          <p>MCAST provides an excellent chance for students looking for an International
            Qualification. Our Programs are designed by the Industry professionals, has a
            history of turning out graduates with the top talents that organizations demand
            and get chance to be a part of the European Region.
          </p>
          <Button variant="danger">Apply Now</Button>

        </Container>
      </div>
      <div className='offered'>
        <Container>
          <Row>
            <Col md="6">
              <div className=''>
                <h2 className='mb-5'>Qualifications Offered</h2>
                <ul>
                  <li>MBA -
                    <ol>
                      <li>1) Business</li>
                      <li>2) Small Business</li>
                    </ol>
                  </li>
                  <li>
                    MSc ( Information Technology & Systems )
                  </li>
                  <li>
                    Combination Program (PGDBM - MBA)
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="6">
              <div className='programs'>
                <p>Our MBA program seeks to build confident, forward- thinking executives who can mix strategic
                  thinking with excellent operational focus in prder to meet the evidence-based requirement for qualified managers.
                </p>
              </div>
            </Col>
          </Row>
          <p>Mode of Learning : Online / On Campus</p>
        </Container>
      </div>
      <div className='Masters'>
        <Container>
          <h3 className="mb-5">Home > MCAST > MBA</h3>
          <h4 className="business">Masters of Business Administration (MBA) for the SMALL BUSINESS</h4>
          <h2 className="mt-5">Key Highlights</h2>
          <Row className="mt-5">
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>1) Flexible Intakes</li>
                  <li>2) Flexible Mode of Study</li>
                  <li>3) Fast Track</li>
                  <li>4) Assignment Based Assessment</li>
                  <li>5) Doubt Sessions </li>
                </ol>
              </div>
            </Col>
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>6) Real Time Case Studies</li>
                  <li>7) Industry Expert Live Session</li>
                  <li>8) Career Assistance</li>
                  <li>9) Duration - 2 Years</li>
                  <li>10) Credits - 90 ECTS</li>
                </ol>
              </div>

            </Col>
            <Col md="4">
              <div className='entry'>
                <h3>
                  Entry Requirements
                </h3>
                <p>First degree in business; management or a technological programme.</p>
                <p>Candidates  must also have 2 years work experience.</p>
              </div>
            </Col>
          </Row>
          <div className=''>
            <h3>Course Overview</h3>
            <p>The MBA for the Small Business programme focuses on the theoretical knowledge, application-oriented experiences, and identification of innovation possibilities and growth potentials of the small business or strategic business units. Learners will be able to understand the fundamental concepts of business management, business development, as well as operations and project management within a small business. MCAST works very closely with small businesses to design and continuously develop this MBA programme that comprises 10 modules and a Master’s Dissertation.
            </p>
          </div>
          <Row>
            <Col md="9">
              <h3>Learning Outcomes</h3>
              <h5>Upon successful completion of this Masters Programme the learners will be able to: </h5>
              <p> - Understand and satisfy the business needs and requirements of micro and small businesses within local industry.
              </p>
              <p> - Identify innovation possibilities and growth potentials within choice companies, and act to address these possibilities.</p>
              <p> - Develop critical thinking abilities and foster analytical skills to address today’s toughest business challenges.</p>
              <p> - Act as a business leader who is capable of leading, motivating and operating within a small business venture</p>
            </Col>
            <Col md="3">
               <img src='' className='img-fluid'/>
            </Col>
          </Row>
          <div className='Instructors'>
            <h4>Instructors: https://intranet.mcast.edu.mt/</h4>
          </div>
          <h3>Program Structure:</h3>
           <div className="program">
                  
                  <h4> - Academic Year 1 (Semesters 1 & 2: 30 ECTS) – Exit Option: Post Graduate Certificate</h4>
                <Row>
                  <Col md={6}>
                  <ul>
                    <li>Applied Research and Development</li>
                    <li>Business Analytics</li>
                  </ul>
                  </Col>
                  <Col md={6}>
                  <ul>
                    <li>Strategy and Small Business Growth</li>
                    <li>Lean Start-up</li>
                    <li>Accounting for Managers</li>
                  </ul>
                  </Col>
                </Row>
                
                  <h4> - Academic Year 2 (Semesters 3 & 4: 30 ECTS) – Exit Option: Post Graduate Diploma</h4>
                  <ol>
                    <li>Entrepreneurship & Innovation Management</li>
                    <li>Development Economics</li>
                    <li>Small Business Marketing</li>
                  </ol>
                  <ol>
                    <li> Elective Advanced Professional Studies - (Any 2 Modules)</li>
                    <li>Basics of Project Management</li>
                    <li>Financial Analysis</li>
                    <li>Lean Leadership</li>
                  </ol>
                <h4> - Academic Year 3 (Semester 5: 30 ECTS) – Final Exit: Masters</h4>
                <ol>
                  <li>Dissertation</li>
                </ol>
             </div>
             <h4 className="mt-4">Fee Structure: </h4>
        </Container>
      </div>

    </>
  )
}

export default Mcast