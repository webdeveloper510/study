import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Row, Col} from 'react-bootstrap';
import logo from '../images/British_Council.png'
import image from '../images/british-council.jpg'
import image1 from '../images/BC2.jpg'



function British() {
  return (
   <>
   <div className='British'>
    <Navbar expand="lg" className='navbars'>
      <Container className='p-0'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">HOME </Nav.Link>
            <Nav.Link href="#link">ABOUT US</Nav.Link>
            <Nav.Link href="#link">SERVICE </Nav.Link>
            <Nav.Link href="#link">COURSES </Nav.Link>
            <Nav.Link href="#link">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <div class="text-right">
        <img src={logo} width="420px" height="120px"/>
    </div>
    <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>British Council</Breadcrumb.Item>
        </Breadcrumb>

        <h3 className='mt-5'>WANT TO APPLY FOR INTERNATIONAL UNIVERSITIES AND GET IMMIGRATION OPPORTUNITIES TO UK, US, CANADA. CLICK ON THE BANNER AND GET MORE INFORMATION</h3>
    <div className='my-4'>
        <img src={image} width="100%" height="600px"/>
    </div>
    </Container>
    </div>
    <div className='British-world'>
      <Container>
        <p><b>Certificates: </b> IETLS / APTIS</p>
         <Row>
          <Col md={6}>
          <p><b>Instructor:</b></p>
        <ol>
            <li>Nancy Singhal</li>
            <li>Christian Damanka</li>
            <li>Ansea Isufi</li>
            <li>Lydia Meriku</li>
            <li>Alfred Mensah</li>
            <li>Samuel Dobor</li>
        </ol>
        <p><b>Program Structure / Types of Programs: </b> </p>
           <ul>
                <li>Aptis variants</li>
                <li>Aptis General</li>
                <li>Aptis Advanced</li>
                <li>Aptis for Teachers</li>
                <li>Aptis for Teens</li>
           </ul>
          <p><b>Benefits:</b> <br/>
          The English proficiency data provided by Aptis is accurate and dependable. As a result, you may decide more effectively regarding hiring, workforce development, and training requirements.
          <br/>
          <br/>
          Aptis is adaptable and available so you can easily evaluate people.<br/> <br/>
          Additionally, it enables you to quickly and reliably test the skills necessary to meet your needs."	
          </p>
          <p><b>Mode of Study:</b>Online</p>
          <p><b>Fees:</b> TBD</p>
          </Col>
          <Col md={6}>
           <img src={image1} className="img-fluid"/>
          </Col>
         </Row>

      
      </Container>
    </div>
   </>
  )
}

export default British