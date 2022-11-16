import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function iot_content() {
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
                  <Nav.Link  href="/iot_info">Home</Nav.Link>
                  <Nav.Link className='active' href="/iot_content">Destination</Nav.Link>
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
    <p>-Understand IoT technologies </p>
    <p>-Understand IoT security considerations.</p>
    <p>-Understand the benefits of IoT technologies</p>
    <p>-Understand the requirements of IoT technologies.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Purposes of IoT technologies.</p>
    <p>-Impact of IoT technologies on both business and personal life.</p>
    <p>-IoT technologies that have been developed over the past number of years and the key stages within this development cycle.</p>
    <p>-Speed of developments that have occurred.</p>
    <p>-Components used in IoT technologies, their purpose and setup considerations.</p>
    <p>-Personal uses of IoT technologies.</p>
    <p>-Professional use of IoT technologies.</p>
    <p>-Technology Drivers</p>
    <p>-Business Drivers.</p>
    <p>Trends..</p>
    <p>-Security issues with IoT technologies.</p>
    <p>-Considerations to make when implementing IoT solutions.</p>
    <p>-IoT connectivity protocols.</p>
    <p>-Benefits of using IoT technologies.</p>
    <p>Software-defined networks and virtualisation.</p>
    <p>-Analytical benefits.</p>
    <p>-Future use of IoT technology..</p>
    <p>-Paid subscriptions.</p>
    <p>Sustainability measures.</p>
    <p>-Connectivity and network requirements..</p>
  </div>
</Col>
</Row>
           


          </Container>
        </div>
      </section>

    </>
  )
}

export default iot_content