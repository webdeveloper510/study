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
    <p>-Analyse the role of different IT systems in support of organisational objectives.</p>
    <p>-Compare flexible and reliable IT systems that respond to organisational requirements in an organisational context.</p>
    <p>-Evaluate IT systems that support value-added change in organisations</p>
    <p>-Recommend practical IT systems solutions to given organisational scenarios.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Definition of IT Systems</p>
    <p>-Definition of information and data.</p>
    <p>-Hardware and software for IT systems.</p>
    <p>-Emerging digital technologies and use of digital devices.</p>
    <p>-The role of IT systems.</p>
    <p>- Types of information and data..</p>
    <p>-Reliability of IT systems and data quality.</p>
    <p>-Project management methodologies and strategies</p>
    <p>-IT support for value-added change</p>
    <p>-IT systems support for problem solving</p>
    <p>-Monitoring and evaluating IT systems.</p>
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