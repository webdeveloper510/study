import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function System_development_content() {
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
                  <Nav.Link href="/system_development_info">Home</Nav.Link>
                  <Nav.Link className='active' href="/system_development_content">Destination</Nav.Link>
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
                  <p>-	Understand the development lifecycle of a system. </p>
                  <p>-	Understand software and data system construction.</p>
                  <p>-	Understand system design, implementation and testing.</p>
                  <p>-	Understand how to create a positive user experience.</p>
                  <p>- 	Be able to develop and test prototypes.</p>
                  <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
                  <h4 className='title'>Entry requirements</h4>
                  <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
                  
                 

                </div>
              </Col>
              <Col md={6}>
                <div className='mt-5'>
                <h4 className='title'>Course Content</h4>
                  <p>-	Systems development lifecycle models (SDLC).</p>
                  <p>- 	Problems that can occur from not using a lifecycle model.</p>
                  <p>- 	Benefits of developing lifecycle of a system.</p>
                  <p>- 	User requirements. </p>
                  <p>- 	System requirements.</p>
                  <p>- 	Change requests.</p>
                  <p>- 	Software development methodologies.</p>
                  <p>-	Information flows.</p>
                  <p>-	Business case. </p>
                  <p>-	System implementation and testing.</p>
                  <p>-	Evaluating a system.</p>
                  <p>-	Version control.</p>
                  <p>-	Software support and maintenance.</p>
                  <p>-	Laws and regulations.</p>
                  <p>- 	Principles of creating a positive user experience.</p>
                  <p>- 	Positive and negative aspects.</p>
                  <p>- 	Measure success and impact.</p>
                  <p>- 	Addressing the differing needs of target audiences.</p>
                  <p>-	User interface wireframe (UX).</p>
                  <p>-	Documentation and processes for training end users.</p>
                  <p>-	User interface prototype.</p>
                  <p>-	Evaluate the success of the products usability.</p>
                  <p>-	Comparing actual outcomes with expected outcome and suggest resolution for failed plan.</p>
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

export default System_development_content