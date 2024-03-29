import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Row, Col, Button } from 'react-bootstrap';
import logo from '../images/British_Council.png'
import image from '../images/british-council.jpg'
import image1 from '../images/BC2.jpg'
import logo1 from '../images/Seeding Brains UI/logo.png'


function British() {
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
      <div className='british'>
        <div className='overlay'>


          <Container>
            <div className="">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>BRITISH COUNCIL</Breadcrumb.Item>
              </Breadcrumb>
              <div className='home_logo my-5'>
                <img src={logo} width="420px" height="120px" alt="" />
              </div>
            </div>
            <h2>Overview</h2>
            <p>WANT TO APPLY FOR INTERNATIONAL UNIVERSITIES AND GET IMMIGRATION OPPORTUNITIES TO UK, US, CANADA. CLICK ON THE BANNER AND GET MORE INFORMATION
            </p>
            <Button variant="danger">Apply Now</Button>

          </Container>
        </div>
      </div>
      <div className='offered'>
        <Container>
          <h2 className='mb-5'>Course Overview</h2>
          <Row>
          <Col md="12">
              <p className="my-3"><b>APTIS: </b>  Aptis is a computer based test which provides fast results reliably marked by our examiners. You can select the day, time, and location of testing with Aptis' flexible delivery method. Regardless of the candidates' ability level, Aptis is a scalable testing solution that may be utilized with large groups of applicants in numerous locations. You can either delegate this to our knowledgeable team and free up your time, or you can manage the entire process autonomously at your company. Additionally, we can offer accommodations for candidates with specific needs, such as Braille and big font tests, time changes, pen and paper tests, and many others.
              </p>
            </Col>
            <Col md="12">
              <div className=''>

                <p className="my-3"><b>IETLS: </b> An international standardized test of English language ability for non-native English speakers is called the International English Language Testing System. It was founded in 1989 and is jointly managed by the British Council, IDP: IELTS Australia, and Cambridge Assessment English.
                </p>

              </div>
            </Col>
            
          </Row>
          <h4>Mode of Learning: Online</h4>
        </Container>
      </div>
      <div className='Masters'>
        <Container>

          <h2 className="mt-5">Benefits:</h2>
          <p>The English proficiency data provided by Aptis is accurate and dependable. As a result, you may decide more effectively regarding hiring, workforce development, and training requirements.<br />
            Aptis is adaptable and available so you can easily evaluate people.<br />
            Additionally, it enables you to quickly and reliably test the skills necessary to meet your needs."	</p>

          <div className='Instructors'>
            <h4>Instructors:Nancy Singhal - <a href="https://www.linkedin.com/in/naina-tekriwal-51663482/">https://www.linkedin.com/in/naina-tekriwal-51663482/</a></h4> <br />
            <h4>Christian Damanka - <a href="https://www.linkedin.com/in/revd-christian-damanka-ma-pgcert-hcc-edsml-ba-dtlls-fcmi-mset-3b5bb730">https://www.linkedin.com/in/revd-christian-damanka-ma-pgcert-hcc-edsml-ba-dtlls-fcmi-mset-3b5bb730</a></h4><br />
            <h4>Ansea Isufi</h4><br />
            <h4>Lydia Meriku</h4><br />
            <h4>Alfred Mensah - <a href='https://www.linkedin.com/in/alfred-mensah-a9048428'>https://www.linkedin.com/in/alfred-mensah-a9048428</a></h4><br />
            <h4>Samuel Dobor</h4>
          </div>
          <h3>Program Structure / Types of Programs:</h3>
          <div className="program">
            <Row>
              <Col md={6} className="text-center">
                <h3 className='text-center'>APTIS</h3>
                <hr />
                <Row>
                  <Col md={6}>
                    <ul>
                      <li>Aptis variants</li>
                      <li>Aptis General</li>
                      <li>Aptis Advanced</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul>
                      <li>Aptis for Teachers</li>
                      <li>Aptis for Teens</li>
                    </ul>
                  </Col>
                </Row>

              </Col>
              <Col md={6} className="text-center">
                <h3 className='text-center'>IELTS</h3>
                <hr />
                <Row>
                  <Col md={6}>
                    <ul>
                      <li>Reading</li>
                      <li>Writing</li>
                    </ul>
                  </Col>

                  <Col md={6}>
                    <ul>
                      <li>Listening</li>
                      <li>Speaking</li>
                    </ul>
                  </Col>

                </Row>

              </Col>
            </Row>
          </div>

          <h4 className="mt-4">Fees: TBD </h4>
        </Container>
      </div>
    </>
  )
}

export default British