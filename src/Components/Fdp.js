import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/FDP.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo1 from '../images/Seeding Brains UI/logo.png'
import fdp from '../images/FDP1.jpg'
import { Button } from 'react-bootstrap';
function Fdp() {
  return (
    <>
    <div className='header'>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img src={logo1} className="img-fluid" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#link">ABOUT US</Nav.Link>
                <Nav.Link href="#link">SERVICE</Nav.Link>
                <Nav.Link href="#link">COURSES</Nav.Link>
                <Nav.Link href="#link">CONTACT US</Nav.Link>
                <Button variant="danger">Search</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='fdp'>

        <Container>
          <div className="">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>FDP</Breadcrumb.Item>
            </Breadcrumb>
            <h3 className='my-5'>FDP: Faculty Development Program</h3>
            <div className='home_logo my-5'>
              <img src={logo} width="420px" height="120px" alt="" />
            </div>
          </div>
          <h2>Overview</h2>
          <p>WANT TO DEVELOP YOUR PROFESSIONAL CAREER, GET THE FDP CERTIFCATE FROM THE RENOWED ANGLIA RUSKIN UNIVERSITY AND GET THE BEST OUT OF THE LOT

          </p>
          <Button variant="danger">Apply Now</Button>

        </Container>
      </div>
      <div className='offered'>
        <Container>
          <Row>
            <Col md="6">
              <div className=''>
                <h2 className='mb-5'>Qualifications Offered</h2>
               <p>Faculty Development Program</p>
              </div>
            </Col>
            <Col md="6">
             
            </Col>
          </Row>
          <p>Mode of Learning : Online / Offline </p>
        </Container>
      </div>
      <div className='Masters'>
        <Container>
          <h2 className="mt-5">Key Highlights</h2>
          <Row className="mt-5">
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>1) Flexible Learning</li>
                  <li>2) Interational Cetification</li>
                </ol>
              </div>
            </Col>
           
          </Row>
          <div className=''>
            <h3>Program Overview</h3>
            <p>A strong faculty development program promotes cooperation, work happiness, productivity, and faculty retention. It provides the foundation for faculty success at all career stages. Inclusion of modern themes like mentorship, leadership, and an emphasis on intrapersonal abilities, in addition to conventional topics like clinical excellence, research,
               teaching, and administration, contributes to personal growth and self-improvement, enabling lifetime achievement.</p>
          </div>
          <Row>
            <Col md="9">
              <h3>Learning Outcomes</h3>
             
              <p> - Create a welcoming, encouraging, and inclusive learning atmosphere for postsecondary education by using rapport-building strategies.              </p>
              <p> - Deliver a lesson that closes the knowledge gap between you and your students in a powerful, memorable way.</p>
              <p> - By employing efficient third-level education teaching strategies, you can improve your institutional reputation as a reflective teacher.</p>
              <p> - Implement useful techniques for lesson planning and classroom management</p>
            </Col>
            <Col md="3">
               <img src='' className='img-fluid'/>
            </Col>
          </Row>
          <div className="
          my-4">
            <h3>Benefits:</h3>
            <ul>
               <li>Professional Development</li>
               <li>Networking</li>
              </ul>

            </div>
          <div className='Instructors my-3'>
            <h4>Instructors: <a href="https://www.linkedin.com/in/simon-evans-2b730b110/">https://www.linkedin.com/in/simon-evans-2b730b110/</a></h4>
          </div>
             <h4>Dr Simon Evans (Director International Partnership) <br/>
             Faculty of Business & Law (Anglia Ruskin University)</h4>
             <h4 className="mt-4">Fees: </h4>
             <ul>
               <li>UK: GBP 200 </li>
               <li>UAE: AED 1000</li>
               <li>INDIA: INR 20,000</li>

              </ul>
        </Container>
      </div>
    </>
  )
}

export default Fdp