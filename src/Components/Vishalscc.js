import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/vscc.png'
import images from '../images/VSCC.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo1 from '../images/Seeding Brains UI/logo.png'
import image from '../images/VSCC1.jpg'
import image1 from '../images/VSCC2.jpg'
import image2 from '../images/VSCC3.jpg'
import image3 from '../images/VSCC4.jpg'
import { Button } from 'react-bootstrap';


function Vishalscc() {
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
      <div className='Credentials'>

        <Container>
          <div className="">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>VSCC</Breadcrumb.Item>
            </Breadcrumb>
            <h3 className='my-5'>Vishal Saxena Commerce Classes </h3>
            <div className='home_logo my-5'>
              <img src={logo} width="420px" height="120px" alt="" />
            </div>
          </div>
          <h2>Overview</h2>
          <p>EXCLUSIVE COURSES FOR THE STUDENTS OF NORTH INDIA IN ASSOCIATION WITH THE UK AWARDING BODIES AND GET A CHANCE TO BUILD YOUR CAREER & SETTLE IN THE UK
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
                  <li>1) Level 4/5 Higher National Diploma in Business Management 
                  </li>
                  <li>2) Level 7 Diploma in Strategic Leadership & Management
                  </li>
                 
                </ul>
              </div>
            </Col>
            <Col md="6">
             
            </Col>
          </Row>
          <p>Mode of Learning: Online / On Campus</p>
        </Container>
      </div>
      <div className='Masters'>
        <Container>
          <h4 className="business">Level 4 & 5 HND in Business Management Pathway Picture to be Put Up</h4>
          <h2 className="mt-5">Key Highlights</h2>
          <Row className="mt-5">
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>1) Flexible Intakes</li>
                  <li>2) Flexible Mode of Study</li>
                
                  <li>3) Assignment Based Assessment</li>
                  <li>4) Doubt Sessions </li>
                </ol>
              </div>
            </Col>
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>5) Real Time Case Studies</li>
                  <li>6) Industry Expert Live Session</li>
                  <li>7) Career Assistance</li>
                  <li>8) Duration - 8 Months</li>
                  <li>9) Credits - 360</li>
                </ol>
              </div>

            </Col>
            <Col md="4">
              <div className='entry'>
                <h3>
                  Entry Requirements
                </h3>
                <p>British Awarding Body Level 3 qualification in Business</p>
                <p>Other related Level 3 qualifications</p>
                <p>An Access to Higher Education Diploma from an approved further education institution</p>
                <p>Relevant work experience or An international equivalent to the above qualifications</p>
              </div>
            </Col>
          </Row>
          <div className=''>
            <h3>Course Overview</h3>
            <p>To develop students' enquiring minds, abilities to work across various business functions, and confidence to lead, manage, respond to change, and tackle a variety of complex business situations.
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

export default Vishalscc