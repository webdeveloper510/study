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
    <p>-Analyse how effective marketing contributes to business strategies in an international context.</p>
    <p>-Evaluate entry to a selection of international markets and define the key success factors.</p>
    <p>-Debate how the elements of the marketing plan can be adapted or standardised across international markets</p>
    <p>-Present different international marketing approaches for multinational, global, transnational or meta-national contexts.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Scope and definition of international marketing</p>
    <p>-Rationale for why organisations seek to internationalise marketing.</p>
    <p>-Key global macro and customer trends influencing international marketing..</p>
    <p>-Marketing’s role in contributing to the business strategy in an international context.</p>
    <p>-Factors that influence internationalisation.</p>
    <p>- Setting an appropriate international marketing strategy to meet objectives.</p>
    <p>-Different routes to market.</p>
    <p>-Critical evaluation of international markets.</p>
    <p>-Risk management and contingency planning in relation to volatile markets.</p>
    <p>-International marketing approaches.</p>
    <p>-Assessing international market competition.</p>
    <p>-Assessing international market performance.</p>
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