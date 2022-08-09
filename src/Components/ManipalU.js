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
function ManipalU() {
  return (
    <>
   <div className='ManipalU'>
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
            <Breadcrumb.Item active>Manipal University</Breadcrumb.Item>
        </Breadcrumb>

        <h3>GET AN OPPORTUNITY TO GET AN INTERNATIONAL DIPLOMA WITH A UK DEGREE WHEN YOU JOIN MANIPAL UNIVERSITY</h3>
    <div className='my-4'>
        <img src={image} width="100%" height="600px" alt="" />
    </div>
    </Container>
    </div>
    <div className='ManipalU-world'>
      <Container>
      <p><b>Certificates: </b></p>
        <ol>
          <li>PGDBM</li>
          <li>ARU MBA Top-Up</li>
        </ol>
        <p><b>Instructor: </b>   <a href='https://www.manipaldubai.com/sob/faculty/faculty-list.html'>https://www.manipaldubai.com/sob/faculty/faculty-list.html</a> </p>
         
        <Row>
          <Col md={6}>
          <p><b>Program Structure: PGDBM</b> <br/>
              The curriculum is meant to equip graduates for management careers in a variety of industries. The program was created to meet the needs of working individuals who want to advance their education or change careers but do not have the time or motivation to enroll in a two-year Masters program.
              <br/>
              <br/>
              The curriculum also allows students to pursue a specialization in one of the following streams: Management<br/>
              Digital Marketing <br/>
              Business Analytics<br/>
              Hospitality and Tourism
          </p>
          <p><b>Benefits:</b></p>
          <p><b>PGDBM</b></p>
          <ul>
            <li>Created with working individuals seeking career advancement in mind</li>
            <li>Adaptable - These are taught as an evening session using our course materials and online instruction.</li>
            <li>A shorter business graduate degree offers the chance to select from a variety of specializations for career change.</li>
            <li>designed for business clients who want their education to be paid for by employers</li>
            <li>In order for students to comprehend real-world industry-specific difficulties and how solutions may be worked around them, case studies have been introduced to the class.</li>
            <li>Industry professionals lead the seminars and workshops. </li>
          </ul>
          <p><b>MBA ARU</b></p>
          <ul>
            <li>Gaining an international perspective is one of the things that an MBA from Anglia Ruskin University will assist students with.</li>
            <li>Develop important management abilities.</li>
            <li>Increase your employability.</li>
            <li>Consolidate your business knowledge while resolving practical problems.</li>
          </ul>
          <p><b>CAREERS:</b></p>
          <ul>
            <li>The programme is designed to prepare graduates for careers as managers across a range of industries. The current range of proposed specializations are aligned with current needs in the market areas of:</li>
            <li>General Management</li>
            <li>Digital Marketing</li>
            <li>Hospitality and Tourism.</li>
          </ul>
          </Col>
          <Col md={6}>
            <img src={image1} className="img-fluid" alt="" />
          </Col>
        </Row>
       
         
          <p><b>MODE OF STUDY:</b> Fulltime / Online</p>
          <p><b>FEES</b></p>
          <p>Registration - GBP 340 <br/>
          Tution Fees - GBP 10,000</p>
      </Container>
    </div>
    </>
  )
}

export default ManipalU
