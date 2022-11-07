import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function analysis_content() {
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
    <p>-Understand the fundamentals of big data.</p>
    <p>-Understand the structure, size and security of big data</p>
    <p>-Understand the characteristics of data analysis.</p>
    <p>-Be able to present information from large data sets.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Purpose, sources, benefits and uses of big data.</p>
    <p>-Problems and ethical concerns related to the use of big data..</p>
    <p>-Understanding of structured and unstructured data</p>
    <p>-Data storage methods and resultant problems.</p>
    <p>-Distributed computing and associated risks.</p>
    <p>- Importance of analysing data.</p>
    <p>-Establishing data trends..</p>
    <p>-Analytical and statistical representations of data.</p>
    <p>-Methods of presenting information.</p>
    <p>-Target audience.</p>
    <p>-Areas for improvement based on data analysis</p>
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

export default analysis_content