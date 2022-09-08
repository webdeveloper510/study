import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Row, Col, Button} from 'react-bootstrap'
import logo from '../images/ARU.png'
import Angliaimage from '../images/ARU1.jpg'
import imagess from '../images/ARU2.jpg'
import logo1 from '../images/Seeding Brains UI/logo.png'

function Anglia() {
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
      <div className='anglia'>
    <div className='overlay'>
        <Container>
          <div className="">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>ANGLIA RUSKIN UNIVERSITY</Breadcrumb.Item>
            </Breadcrumb>
            <div className='home_logo my-5'>
              <img src={logo} width="420px" height="120px" alt="" />
            </div>
          </div>
          <h2>Overview</h2>
          <p>GET POST STUDY WORK VISA AND WORK PLACEMENT OPPORTUNITY IN UK. JOIN THE MASTERS PROGRAM OF ANGLIA RUSKIN UNIVERSITY IN CAMBRIDGE WITH FREE ACCESS TO THE CAMBRIDGE UNIVERSITY’S ICONIC LIBRARY.</p>
          <Button variant="danger">Apply Now</Button>

        </Container>
        </div>
      </div>
      <div className='offered'>
        <Container>
          <Row>
            <Col md="6">
              <div className=''>
                <h2 className='mb-3'>Qualifications Offered</h2>
                <ul>
                  <li>1) Bachelors Degree (TopUp)
                  </li>
                  <li>2) Masters Degree (TopUp)
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="6">
            </Col>
          </Row>
    
          <p>Mode of Learning: Online / On Campus / Distance Learning</p>
        </Container>
      </div>
      <div className='Masters'>
        <Container>
        <h4 className="business">Bachelors Top-Up Degree</h4>
          <h2 className="mt-3">Key Highlights</h2>
          <Row className="mt-3">
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>1) Flexible Intakes</li>
                  <li>2) Flexible Mode of Study</li>
                  <li>3) Fast Track</li>
                  <li>4) Assignment Based Assessment</li>
                  <li>5) Doubt Sessions </li>
                </ol>
              </div>
            </Col>
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>6) Real Time Case Studies</li>
                  <li>7) Industry Expert Live Session</li>
                  <li>8) Career Assistance</li>
                  <li>9) Duration - 8 Months</li>
                  <li>10) Credits - 60 </li>
                </ol>
              </div>

            </Col>
            <Col md="12">
              <div className='entry my-4'>
                <h3>
                  Entry Requirements
                </h3>
                <ul>
                    <li>Relevant & Related Level  5 qualification in the Prefered Area of Specialization</li>
                     <li>An Access to Higher Education Diploma from an approved further education institution</li>
                     <li> Relevant work experience or an international equivalent to the above qualifications.</li>
                  </ul>
           
              </div>
            </Col>
          </Row>
          <div className='my-4'>
            <h3>Course Overview</h3>
            <p>- Advance your understanding of business management and develop the skills, knowledge and confidence to launch a fulfilling career as a business leader with our 100% online bachelor’s degree.</p>
            <p>- Improve your knowledge of modern business theories and practices that support successful organizations across all structures, sizes, and sectors.</p>
            <p>- Study with a job-based methodology that enables you to build useful skills to have an influence at work while you study.</p>
            <p>- You have the option to arrange your studies around your personal and professional schedules with 100 percent online learning.</p>
          </div>

          <h3>Core Units:</h3>

          <ul>
            <li>1) Strategic Management</li>
            <li>2) Work Based Major Project</li>
            <li>3) Work Based Project Impact and Review</li>
            <li>4) Reflections on Practice and Career Progression.</li>
          </ul>

          <div className='Instructors'>
          <h4>Instructors - <a href="https://london.aru.ac.uk/about-us/academic-staff">https://london.aru.ac.uk/about-us/academic-staff </a> </h4>
            </div>

            <hr/>
            
         <h4 className='business'>Masters of Business Administration (Top Up)</h4>
         <h2 className="mt-3">Key Highlights</h2>
          <Row className="mt-3">
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>1) Flexible Intakes</li>
                  <li>2) Flexible Mode of Study</li>
                  <li>3) Real Time Case Studies</li>
                  <li>4) Assignment Based Assessment</li>
                  <li>5) Doubt Sessions </li>
                </ol>
              </div>
            </Col>
            <Col md="4">
              <div className='key'>
                <ol>
                  <li>6) Industry Expert Live Session</li>
                  <li>7) Career Assistance</li>
                  <li>8) Duration - 8 Months</li>
                  <li>9) Credits - 60 </li>
                </ol>
              </div>

            </Col>
            <Col md="12">
              <div className='entry my-4'>
                <h3>
                  Entry Requirements
                </h3>
                <ul>
                    <li>A degree from a UK university, normally at a minimum of lower second class honours; or equivalent from a non-UK university.</li>
                     <li>Or an equivalent professional qualification.</li>
                     <li> Or work experience at an appropriate and relevant level for an MBA course, such as a post of management of professional responsibility over an extended period of time.</li>
                     <li>If English is not your first language, you will be expected to demonstrate a certificated level of proficiency of at least IELTS 6.5 or equivalent.</li>
                     <li>As a distance learner, you'll also need a suitable computer with internet connection, together with sufficient IT competence to make effective use of our online learning management system (LMS) with high-speed internet and email.</li>
                  </ul>
           
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <h3>Course Overview</h3>
               <p> - Our online CMI accredited Master of Business Administration (MBA) is a prestigious management qualification designed to provide you with the skills and expertise to advance your management and leadership career aspirations.
              </p>
              <p> - With a strong entrepreneurial and innovative focus, our MBA is ideal if you’re new to a management role, aspiring to work in management or looking to start your own business.</p>
              <p> - Studying online will give you the flexibility to advance your career around your other commitments.</p>
              <p> - Globally recognised prestigious management qualification accredited by the Chartered Management Institute (CMI)</p>
              <p> - Develop the knowledge and skills to advance your management career and achieve your ambitions.</p>
              <p> - 100% online learning gives you the flexibility to fit learning around other commitments</p>
            </Col>
          </Row>
          <div className='Instructors'>
            <h4>Instructors:<a href="https://london.aru.ac.uk/about-us/academic-staff"> https://london.aru.ac.uk/about-us/academic-staff</a></h4>
          </div>
          <h3>Program Structure:</h3>
           <div className="program">
                <p>Here you will undertake a major project that focuses on your understanding and execution of entrepreneurial management in an area of specific interest to your or your organisation, such as:</p>

                <h4>Core Units:</h4>

                <Row>
                  <Col md={6}>
                    <ul>
                      <li>An applied or engaged research project</li>
                      <li>An enterprise consultancy project</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul>
                      <li>Taking a new business proposition through to proof of concept</li>
                      <li>This is a 15,000 words dissertation.</li>
                    </ul>
                  </Col>
                </Row>
                </div>
                 <h4 className='mt-4'>Benefits:</h4>
                 <ul>
                  <li>1) Dual Certification</li>
                  <li>2) Post Study Work Visa</li>
                 </ul>
             <h4 className="mt-4">Fees: TBD </h4>
             <p>Online: GBP 3500 <br/>
Fulltime: GBP 15,000
</p>
        </Container>
      </div>
    </>
  )
}

export default Anglia