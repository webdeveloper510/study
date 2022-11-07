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
    <p>-Understand the characteristics of ERP systems</p>
    <p>-Understand organisational benefits of ERP systems.</p>
    <p>-Be able to plan the implementation of ERP systems</p>
    <p>-Understand ethics and codes of conduct in computing systems.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Purpose, features and principles of an ERP System</p>
    <p>-ERP and management information systems (MIS).</p>
    <p>-Manufacturing environments.</p>
    <p>-Benefits of ERP systems for the Management.</p>
    <p>-User requirements document.</p>
    <p>-Quality assurance techniques</p>
    <p>-Risks involved in implementing quality assurance techniques and risk management.</p>
    <p>-Test functionality.</p>
    <p>-Training and support requirements..</p>
    <p>-Test plan and its scope.</p>
    <p>Strategic plan.</p>
    <p>-Ethics in computing systems.</p>
    <p>Ethical decision-making steps.</p>
    <p>-Working with third party providers..</p>
    <p>-Roles in computing systems..</p>
    <p>-Legislative and regulatory obligations.</p>
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