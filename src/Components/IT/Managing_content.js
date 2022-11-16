import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function Managing_content() {
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
                  <Nav.Link href="/managing_info">Home</Nav.Link>
                  <Nav.Link className='active' href="/managing_contant">Destination</Nav.Link>
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
                  <h4 className='title'>MANAGING INNOVATION AND CHANGE IN COMPUTING</h4>
                  <h4 className='title'>LEARNING OUTCOMES</h4>
                  <p>-	Understand innovation and change management in computing.</p>
                  <p>-	Understand how to manage change.</p>
                  <p>-	Understand how to explore innovative computing ideas.</p>
                  <p>-	Be able to recommend innovative computing solutions.</p>
                  <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
                  <h4 className='title'>Entry requirements</h4>
                  <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
                 
                </div>
              </Col>
              <Col md={6}>
                <div className='mt-5'>
                <h4 className='title'>Course Content</h4>
                  <p>- 	Benefits of understanding innovation and change  management in computing.</p>
                  <p>- 	Types of computing changes.</p>
                  <p>- 	Potential risks.</p>
                  <p>- 	The impact of change on an organisation. </p>
                  <p>- 	Managing change appropriately.</p>
                  <p>- 	Consequences of poorly managing innovation and change.</p>
                  <p>- 	Change management techniques </p>
                  <p>-	Four principles of change management.</p>
                  <p>- 	Change management process and methodologies.</p>
                  <p>- 	Measure the impact of change.</p>
                  <p>- 	Importance of Understanding how to explore innovative computing ideas.</p>
                  <p>- 	Innovations those are common across the computing industry.</p>
                  <p>- 	Benchmarks, costs and return on investment.</p>
                  <p>- 	Keep up to date with innovative computing solutions.</p>
                  <p>- 	Prepare business proposals in respect of innovative computing solutions.</p>
                  <p>- 	Changes to be made to organisational processes to implement computing changes</p>
                  <p>-	Changes to business strategy.</p>
                  <p>- 	Linking innovation and change to an organisation’s ICT strategy. </p>
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

export default Managing_content