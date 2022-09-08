import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/Manipal.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from '../images/MU.jpg'
import image1 from '../images/MU1.jpg'
import { Button } from 'react-bootstrap';
import logo1 from '../images/Seeding Brains UI/logo.png'
function ManipalU() {
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
      <div className='Manipal'>
<div className='overlay'>
        <Container>
          <div className="">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>MANIPAL</Breadcrumb.Item>
            </Breadcrumb>
            <h3 className='my-5'>MANIPAL ACADEMY OF HIGHER EDUCATION (MAHE DUBAI) </h3>
            <div className='home_logo my-5'>
              <img src={logo} width="420px" height="120px" alt="" />
            </div>
          </div>
          <h2>Overview</h2>
          <p>The programme is designed to prepare graduates for careers as managers across a range of industries The programme is being introduced to cater for working professionals who would like to upskill or change careers but do not have the inclination to commit to a two years Masters programme.
          </p>
          <Button variant="danger">Apply Now</Button>

        </Container>
        </div>
      </div>
      <div className='offered'>
        <Container>
          <Row>
            <Col md="6">
              <div className=''>
                <h2 className='mb-3'>Qualifications Offered</h2>
                <ul>
                  <li>Combination Program (PGDBA + MBA)</li>
                </ul>
               <p></p>
              </div>
            </Col>
            <Col md="6">
             
            </Col>
          </Row>
          <h4 className='my-3'><b>Mode of Learning :</b>  Online / On Campus / Distance Learning</h4>
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
                
                </ol>
              </div>
            </Col>
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>4) Real Time Case Studies</li>
                  <li>5) Doubt Sessions </li>
                  <li>6) Industry Expert Live Session</li>
                </ol>
              </div>

            </Col>
            <Col md="4">
              <div className='key'>
                <ul>
                <li>8) Career Assistance</li>
                  <li>9) Duration - 2 Years</li>
                  <li>10) Credits - 120</li>
                  </ul>
              </div>
            </Col>
          </Row>
          <div className="">
             <h3>Entry Requirements:</h3>
             <h5>(Post Graduate Diploma in Business Administration)</h5>
             <p>For admission the candidate must have a Bachelor’s degree from a recognized University with minimum 50 % aggregate marks</p>
            </div>
          <div className='key'>
            <h3>Course Overview</h3>
           <ul>
             <li>Curated for working professionals looking to enhance their career</li>
             <li>Flexible - These are delivered as an evening programme using our courses books and e-learning.</li>
             <li>Opportunity to choose from a range of specializations with a shorter business graduate program for career change</li>
             <li>Formulated toward corporate clients who wish to have their education funded by employers</li>
             <li>Well supported library with 8000 books, 18 business journals and electronic databases (EBSCO, ProQuest etc.) for quick and up-to-date access of information for case-studies, assignments and reading.</li>
             <li>Students have been introduced to case-studies in order for them to understand real-world industry specific problems and how solutions can be worked around them.</li>
             <li>Seminar and Workshop are conducted by industry experts.</li>
            </ul>
          </div>
          <div className='Instructors'>
            <h4>Instructors: <a href='https://www.manipaldubai.com/sob/faculty/faculty-list.html'>https://www.manipaldubai.com/sob/faculty/faculty-list.html</a></h4>
          </div>
          <h3>Program Structure:</h3>
           <div className="program">
                  
                  <h4> - Year 1: PGDBA</h4>
                <Row>
                  <Col md={6}>
                  <p>The curriculum is meant to equip graduates for management careers in a variety of industries. The program was created to meet the needs of working individuals who want to advance their education or change careers but do not have the time or motivation to enroll in a two-year Masters program.</p>

                  </Col>
                  <Col md={6}>
                    <p>The curriculum also allows students to pursue a specialization in one of the following streams: </p>
                  <ul>
                    <li>Management</li>
                    <li>Digital Marketing</li>
                    <li>Business Analytics</li>
                    <li>Hospitality and Tourism</li>
                  </ul>
                  </Col>
                </Row>
                
                  <h4> Year 2: Masters of Business Administration (Anglia Ruskin University)</h4>
                  <ol>
                    <li>Gaining an international perspective is one of the things that an MBA from Anglia Ruskin University will assist students with.</li>
                    <li>Develop important management abilities.</li>
                    <li>Increase your employability.</li>
                    <li>Consolidate your business knowledge while resolving practical problems.</li>
                 </ol>
             </div>
             <h3 className="my-4">Benefits:</h3>
             <h4>PGDBA (Post Graduate Diploma in Business Administration)</h4>
             <ul>
              <li>Created with working individuals seeking career advancement in mind</li>
              <li>Adaptable - These are taught as an evening session using our course materials and online instruction</li>
              <li>A shorter business graduate degree offers the chance to select from a variety of specializations for career change.</li>
              <li>Designed for business clients who want their education to be paid for by employers</li>
               <li>8000 volumes, 18 business journals, and electronic databases (EBSCO, ProQuest, etc.) are all available in a well-supported library, allowing for quick and current access to material for case studies, assignments, and reading.</li>
               <li>In order for students to comprehend real-world industry-specific difficulties and how solutions may be worked around them, case studies have been introduced to the class.</li>
               <li>Industry professionals lead the seminars and workshops.  </li>
              </ul>
              <h3 className="my-4">MBA Career Opportunities:</h3>
              <p>The programme is designed to prepare graduates for careers as managers across a range of industries. The current range of proposed specializations are aligned with current needs in the market areas of:</p>
               <ul>
                  <li>General Management</li>
                  <li>Digital Marketing</li>
                  <li>Business Analytics</li>
                  <li>Hospitality and Tourism.</li>
                </ul>

             <h4 className="mt-4">Fee : </h4>
             <p>Registration - GBP 340</p>
             <p>Tution Fees - GBP 10,000</p>
        </Container>
      </div>
    </>
  )
}

export default ManipalU
