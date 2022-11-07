import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function desk() {
  return (
    <>
      <section className='bodys1'>
        <div className='header1'>
          <Navbar bg="blue" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><img src={Logo} className="img-fluid" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link  href="/BusinessPage">Home</Nav.Link>
                  <Nav.Link className='active' href="/Desk">Destination</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />

                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </div>
        <div className='overlay1 pt-5'>
          <Container>
          <Row>
<Col md={6}>
  <div className='mt-5'>
    <h4 className='title'>LEARNING OUTCOMES</h4>
    <p>-Understand the principles of cyber security</p>
    <p>-Understand the importance of user awareness</p>
    <p>-Understand cyber security protection methods</p>
    <p>-Understand cyber security testing.</p>
    <p>-Understand how to manage a cyber-attack.</p>
    <p>-Be able to manage cyber security in an organisation.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Types of cyber-attacks</p>
    <p>-Implications of cyber-attacks.</p>
    <p>-Organisational policies and procedures.</p>
    <p>-Benefit of monitoring users, devices and activity on a network.</p>
    <p>-Cyber security culture - developing a culture where by staff is not afraid to highlight any concerns relating to cyber security.</p>
    <p>- Home working risks.</p>
    <p>-Staff Training for awareness.</p>
    <p>-Impact and importance of staff training..</p>
    <p>-Staying up to date with cyber threats and security developments.</p>
    <p>-Purpose and methods of cyber security protection..</p>
    <p>-Deployment of the methods and configuring system settings</p>
    <p>-Recommending cyber security protection methods considering a number of factors.</p>
    <p>-Cyber security testing.</p>
    <p>-Vulnerability testing.</p>
    <p>-Scheduling simulated attacks.</p>
    <p>-Configure and test application and network security..</p>
    <p>-Cyber security rating.</p>
    <p>-Steps to manage a cyber-attack</p>
    <p>-Communication methods to be used under a cyber-attack.</p>
    <p>-Root cause analysis</p>
    <p>-Changes in cyber security working practices as a result of findings</p>
    <p>-Installing protection methods on end point devices</p>
    <p>-Setting up and configuring group policies on software</p>
    <p>-Setting up and configuring monitoring software on a network. </p>
    <h4 className='title'>Student Feedback</h4>
  </div>
</Col>
</Row>
           


          </Container>
        </div>
      </section>

    </>
  )
}

export default desk