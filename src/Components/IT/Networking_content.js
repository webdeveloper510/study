import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function Networking_content() {
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
                  <Nav.Link href="/BusinessPage">Home</Nav.Link>
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
                  <p>-	Understand the features of network infrastructures. </p>
                  <p>-	Understand network infrastructure security.</p>
                  <p>-	Understand wireless network infrastructures.</p>
                  <p>-	Understand how to support and maintain a network infrastructure.</p>
                  <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
                  <h4 className='title'>Entry requirements</h4>
                  <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
                  <h4 className='title'>Course Content</h4>
                  <p>-	Importance of having a robust network infrastructure.</p>
                  <p>- 	Network infrastructure design and design plans.</p>
                  <p>- 	Types of networks.</p>
                  <p>- 	Hardware.</p>
                  <p>- 	Software.</p>
                  <p>- 	Network communications elements.</p>
                  <p>- 	Types of Cables.</p>

                </div>
              </Col>
              <Col md={6}>
                <div className='mt-5'>
                <h4 className='title'>Course Content</h4>
                  <p>-	Importance of having a robust network infrastructure.</p>
                  <p>- 	Network infrastructure design and design plans.</p>
                  <p>- 	Types of networks.</p>
                  <p>- 	Hardware.</p>
                  <p>- 	Software.</p>
                  <p>- 	Network communications elements.</p>
                  <p>- 	Types of Cables.</p>
                  <p>-	Security considerations.</p>
                  <p>-	Anti-virus and firewalls.</p>
                  <p>- 	Surveillance and monitoring systems. </p>
                  <p>- 	Wireless networks.</p>
                  <p>- 	Risks associated with use of wireless networks.</p>
                  <p>- 	Protection methods.</p>
                  <p>-	Modern hybrid working environment.</p>
                  <p>-	External network suppliers.</p>
                  <p>-	Installing, supporting and maintaining of a network.</p>
                  <p>-	Remote access methods.</p>
                  <p>Support external providers to achieve results.</p>
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

export default Networking_content