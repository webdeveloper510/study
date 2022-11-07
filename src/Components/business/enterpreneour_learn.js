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
    <p>-Explore how a small business or social enterprise plans and allocates resources to achieve objectives.</p>
    <p>-Evaluate the customer relationship management process for a small business or social enterprise.</p>
    <p>-Develop a cash flow forecast and break-even analysis for a small business or social enterprise.</p>
    <p>-Discuss the financial statements, regulation and legislation that apply to a small business or social enterprise.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Planning resources – premises and equipment, people and skills.</p>
    <p>-Organisation structures applicable to the business purpose and stage of organisation growth.</p>
    <p>-Establishing an appropriate organisational culture.</p>
    <p>-People management.</p>
    <p>-Use of outsourcing, networks and external advisers.</p>
    <p>-Understanding key aspects of employment legislation relevant to a small business.</p>
    <p>-Effective articulation of the vision, goals and objectives.</p>
    <p>-Key components of a business plan.</p>
    <p>-The key components of a business plan needed when securing an overdraft or bank loan.</p>
    <p>-Project management techniques.</p>
    <p>-Building customer relationships..</p>
    <p>-Customer relationship management and transnational sales.</p>
    <p>-Sources of finance for start-up and small businesses or social enterprise.</p>
    <p>-Cash flow forecast and break-even analysis.</p>
    <p>-The key financial statements required.</p>
    <p>-The difference between profit and cash, and the vital importance of cash flow.</p>
    <p>-The elements of working capital and how to manage cash flow effectively.</p>
    <p>- Legal and regulatory issues.</p>
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