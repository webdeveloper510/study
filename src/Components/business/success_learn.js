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
    <p>-Explain the key stages of the project lifecycle that should be considered when project managing.</p>
    <p>-Produce a Project Management Plan (PMP) for a business project using primary and secondary research methods.</p>
    <p>-Implement the Project Management Plan (PMP) to communicate results from the research and make conclusions from the evidence of findings</p>
    <p>-Reflect on value gained from implementing the project and the project management process.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Project management.</p>
    <p>-Advantages of project management.</p>
    <p>-Roles in project managing.</p>
    <p>-Project management skills.</p>
    <p>-Project lifecycle and its stages.</p>
    <p>- Comparison of different organisational approaches to project management using case studies</p>
    <p>-Project management tools.</p>
    <p>-Producing a Project Management Plan (PMP).</p>
    <p>-Research methods and strategies for formulating a Project Management Plan (PMP).</p>
    <p>-Field work.</p>
    <p>-Implementing the PMP.</p>
    <p>Reflection for learning and practice.</p>
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