import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/logo.png'
import image from '../images/img1.jpg'
function ManipalU() {
  return (
    <>
   <div className='ManipalU'>
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
        <img src={logo} className='img-fluid'/>
    </div>
    <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Manipal University</Breadcrumb.Item>
        </Breadcrumb>

        <h3>WANT THE LIFE IN CAMBRIDGE AND HAVE A CHANCE TO WORK IN THE UK, JOIN ARU THE UNIVERSITY IN CAMBRIDGE, AND WITH ADDITIONAL BENEFITS OF CAMBRIDGE UNIVERSITY</h3>
    <div className='my-4'>
        <img src={image} className='img-fluid'/>
    </div>
    </Container>
    </div>
    <div className='ManipalU-world'>
      <Container>
        <p><b>Certificates: </b> IETLS / APTIS</p>
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
      </Container>
    </div>
    </>
  )
}

export default ManipalU
