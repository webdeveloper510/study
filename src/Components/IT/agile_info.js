import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function agile_transform() {
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
                  <Nav.Link className='active' href="/agile_info">Home</Nav.Link>
                  <Nav.Link href="/agile_content">Destination</Nav.Link>
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
        <div className='overlay1'>
          <Container>
            <Row>
              <Col md={7}>
                <div className='mt-4'>
                  <h3 className='title'>AGILE TRANSFORMATION</h3>
                  <h4 className='title'>Why get the RSD?</h4>
                  <p>-To gain the knowledge and uses of agile development within business environments.</p>
                  <p>-To explore the fundamental process of agile development including the methodologies used.</p>
                  <p>-To develop the skills and knowledge to be able to embed and use agile approaches in a working environment.</p>
                </div>
              </Col>
              <Col md={5} className="mt-5">

                <div className='price mt-5'>
                  <img src="" className='img-fluid' alt='prize'/>
                   <h3 className='text-center'>Learn Storytelling </h3>
                   <h5 className='text-center'>Zakir Khan</h5>
                   <p> Get 13 lessons in 2 hours</p>
                   <p>Daily guided exercises</p>
                   <p>Access to 50k+ community </p>
                   <p>Regular exert feedback </p>
                   <h3 className='text-center'>$47</h3>
                   <h5 className='text-center'>Offer Expires in <span className="title">11:27:19 </span> </h5>
                   <div className='text-center'>
                   <Button>BUY NOW</Button>
                     </div>
                </div>
              </Col>
            </Row>
           

          </Container>
        </div>
        <div className='footer py-2 text-right'>
          <div className='container'>
          <a href="#" class="fa fa-facebook me-2"></a>
          <a href="#" class="fa fa-instagram me-2"></a>
          <a href="#" class="fa fa-skype"></a>
          </div>
        </div>
      </section>

    </>
  )
}

export default agile_transform