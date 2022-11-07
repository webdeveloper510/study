import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function sales_content() {
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
    <p>-Demonstrate the key principles of sales management for both public and private organisations.</p>
    <p>-Assess an organisation’s internal environment and capabilities.</p>
    <p>-Evaluate the relative merits of how sales structures are organised and recognise the importance of ’selling through others’.</p>
    <p>-Apply successful selling techniques for building and managing effective customer relationships.</p>
    <p>-Create a portfolio management process to maximise revenue for an organisation.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Introduction and scope of sales management</p>
    <p>-Strategies for measuring and monitoring objectives.</p>
    <p>-Different modes of selling and their impact on buyer and seller roles and dynamics.</p>
    <p>-Consumer buying behaviour process.</p>
    <p>-Business buying behaviour process.</p>
    <p>- Sales promotions and incentives</p>
    <p>-Sales in a digital environment.</p>
    <p>-Sales leadership and the sales force.</p>
    <p>-Application of sales techniques.</p>
    <p>-Portfolio management.</p>
    <p>-Sales cycle.</p>
    <p>-Performance management</p>
  </div>
</Col>
</Row>
           


          </Container>
        </div>
      </section>

    </>
  )
}

export default sales_content