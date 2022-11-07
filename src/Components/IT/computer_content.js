import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function computer_content() {
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
    <p>-Understand the use of computer-based research methods</p>
    <p>-Understand the components of research.</p>
    <p>-Be able to prepare for a computer-based research project</p>
    <p>-Be able to carry out an independent computer-based research project..</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Types of computer-based research methods.</p>
    <p>-Importance of research projects.</p>
    <p>-Primary and secondary data.</p>
    <p>-Qualitative and quantitative research</p>
    <p>-Considerations to determine the appropriate method.</p>
    <p>- Stages in conducting research</p>
    <p>-Regulatory and legal considerations..</p>
    <p>-Ethical considerations.</p>
    <p>-Research for decision making.</p>
    <p>-Preparing for a computer-based research project.</p>
    <p>-Measure the success of a research project.</p>
    <p>-Carry out an independent computer-based research project..</p>
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

export default computer_content