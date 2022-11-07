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
    <p>-Understand the features of agile working.</p>
    <p>-Understand agile transformation in a business environment.</p>
    <p>-Understand the use of an agile transformation strategy</p>
    <p>-Understand the importance of continuous change and improvement.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Agile methodologies.</p>
    <p>-Agile deliverables.</p>
    <p>-Benefits of using agile working for an organisation.</p>
    <p>-Considerations of agile working.</p>
    <p>-Roles in agile working..</p>
    <p>- Agile adoption.</p>
    <p>-Agile transformation..</p>
    <p>-Characteristics of agile transformation.</p>
    <p>-Key stages of agile transformation.</p>
    <p>-Embed agile working.</p>
    <p>-Agile practices when transforming.</p>
    <p>-Methods of applying agile practices.</p>
    <p>-Components and impact of agile transformation strategy.</p>
    <p>-Embedding and monitoring.</p>
    <p>-Roadmap of strategy.</p>
    <p>-Methods and Benefits of continuous change and improvement.</p>
    <p>-Resistance to change and managing it.</p>
    <p>- Measuring impact.</p>
   
    
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