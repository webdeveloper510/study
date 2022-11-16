import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function MobileApp_content() {
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
                  <Nav.Link href="/mobileapp_info">Home</Nav.Link>
                  <Nav.Link className='active' href="/mobileapp_content">Destination</Nav.Link>
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
                  <p>-	Understand mobile application development. </p>
                  <p>-	Be able to design a mobile application.</p>
                  <p>-	Be able to use mobile applications development environments to create a mobile application.</p>
                  <p>-	Be able to test a mobile application.</p>
                  <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
                  <h4 className='title'>Entry requirements</h4>
                  <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
                 

                </div>
              </Col>
              <Col md={6}>
                <div className='mt-5'>
                <h4 className='title'>Course Content</h4>
                  <p>- Personal and business benefits of mobile applications.</p>
                  <p>- Use of a mobile application to solve and eliminate everyday problems.</p>
                  <p>- Software Development Lifecycles.</p>
                  <p>- Models and constraints associated between different model types. </p>
                  <p>- Device capability and performance considerations.</p>
                  <p>- Functional user and technical specifications.</p>
                  <p>- Network communication methods and considerations.</p>
                  <p>- Data persistence methods.</p>
                  <p>- Developments of mobile applications.</p>
                  <p>- Main development environments and the considerations to make in selecting a development environment.</p>
                  <p>- How to design a mobile application and the various stages.</p>
                  <p>- Wireframe design.</p>
                  <p>- Maximise user interaction.</p>
                  <p>-	Accessibility considerations for a mobile application.</p>
                  <p>-	Development environment and associated tools.</p>
                  <p>-	User interface with navigation.</p>
                  <p>-	Object oriented programming.</p>
                  <p>-	Variables.</p>
                  <p>-	Keywords.</p>
                  <p>-	Logical and Arithmetical Operators.</p>
                  <p>-	Conditions in programming.  </p>
                  <p>-	Explain the use of loops in programming.</p>
                  <p>-	Numbers, Characters and Arrays.</p>
                  <p>-	Functions and methods.</p>
                  <p>-	Input and Output Operations.</p>
                  <p>-	Libraries.</p>
                  <p>-	Integration with external services.</p>
                  <p>-	Mobile application testing methods.</p>
                  <p>-	Measure success and impact.</p>
                  <p>-	Test plan and its scope.</p>
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

export default MobileApp_content