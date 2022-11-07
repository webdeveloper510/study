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
    <p>-Analyse the impact and influence that the macro environment has on an organisation and its business strategies.</p>
    <p>-Assess an organisation’s internal environment and capabilities.</p>
    <p>-Apply the outcomes of an analysis, using an appropriate strategic management tool, in a given market sector</p>
    <p>-Develop a strategic management plan in an organisation, informed by models, theories and concepts, to achieve competitive advantage in a given market sector.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Meaning and role of Strategy</p>
    <p>-Strategic planning techniques.</p>
    <p>-Analytical frameworks of the macro environment.</p>
    <p>-Organisational internal environment.</p>
    <p>-Analytical tools and models of analysis.</p>
    <p>- Measuring strategic outcomes.</p>
    <p>-Strategic management planning.</p>
    <p>-Models, theories and other strategic concepts.</p>
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