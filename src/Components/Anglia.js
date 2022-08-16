import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Row, Col, Button} from 'react-bootstrap'
import logo from '../images/ARU.png'
import Angliaimage from '../images/ARU1.jpg'
import imagess from '../images/ARU2.jpg'
import logo1 from '../images/Seeding Brains UI/logo.png'

function Anglia() {
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
              <Breadcrumb.Item active>ANGLIA RUSKIN UNIVERSITY</Breadcrumb.Item>
            </Breadcrumb>
            <div className='home_logo my-5'>
              <img src={logo} width="420px" height="120px" alt="" />
            </div>
          </div>
          <h2>Overview</h2>
          <p>GET POST STUDY WORK VISA AND WORK PLACEMENT OPPORTUNITY IN UK. JOIN THE MASTERS PROGRAM OF ANGLIA RUSKIN UNIVERSITY IN CAMBRIDGE WITH FREE ACCESS TO THE CAMBRIDGE UNIVERSITY’S ICONIC LIBRARY.</p>
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
                  <li>1) Bachelors Degree (TopUp)
                  </li>
                  <li>2) Masters Degree (TopUp)
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="6">
            </Col>
          </Row>
    
          <p>Mode of Learning: Online / On Campus / Distance Learning</p>
        </Container>
      </div>
      <div className='Masters'>
        <Container>
        <h4 className="business">Bachelors Top-Up Degree</h4>
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
                  <li>9) Duration - 8 Months</li>
                  <li>10) Credits - 60 </li>
                </ol>
              </div>

            </Col>
            <Col md="4">
              <div className='entry'>
                <h3>
                  Entry Requirements
                </h3>
                <ul>
                    <li>Relevant & Related Level  5 qualification in the Prefered Area of Specialization</li>
                     <li>An Access to Higher Education Diploma from an approved further education institution</li>
                     <li> Relevant work experience or an international equivalent to the above qualifications.</li>
                  </ul>
           
              </div>
            </Col>
          </Row>
          <div className=''>
            <h3>Course Overview</h3>
            <p>Advance your understanding of business management and develop the skills, knowledge and confidence to launch a fulfilling career as a business leader with our 100% online bachelor’s degree.</p>
            <p>Improve your knowledge of modern business theories and practices that support successful organizations across all structures, sizes, and sectors.</p>
            <p>Study with a job-based methodology that enables you to build useful skills to have an influence at work while you study.</p>
            <p>You have the option to arrange your studies around your personal and professional schedules with 100 percent online learning.</p>
          </div><h3>Program Structure: BSc Hons Management (TopUp)</h3>
          
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
            <h4>Instructors:Nancy Singhal - https://www.linkedin.com/in/naina-tekriwal-51663482/</h4>
            <h4>Christian Damanka - https://www.linkedin.com/in/revd-christian-damanka-ma-pgcert-hcc-edsml-ba-dtlls-fcmi-mset-3b5bb730</h4>
            <h4>Ansea Isufi</h4>
            <h4>Lydia Meriku</h4>
            <h4>Alfred Mensah - https://www.linkedin.com/in/alfred-mensah-a9048428</h4>
            <h4>Samuel Dobor</h4>
          </div>
          <h3>Program Structure / Types of Programs:</h3>
           <div className="program">
                <Row>
                  <Col md={6}>
                    <h3>APTIS</h3>
                  <ul>
                    <li>Aptis variants</li>
                    <li>Aptis General</li>
                    <li>Aptis Advanced</li>
                    <li>Aptis for Teachers</li>
                    <li>Aptis for Teens</li>
                  </ul>
                  </Col>
                  <Col md={6}>
                    <h3>IELTS</h3>
                  <ul>
                    <li>Reading</li>
                    <li>Writing</li>
                    <li>Listening</li>
                    <li>Speaking</li>
                  </ul>
                  </Col>
                </Row>
                </div>
                
             <h4 className="mt-4">Fees: TBD </h4>
        </Container>
      </div>
    </>
  )
}

export default Anglia