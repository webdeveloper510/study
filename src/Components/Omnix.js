import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/Omnix.png'
import image from '../images/OMIX1.jpg'

function Omnix() {
  return (
    <>
  <div className='omnix'>
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
 
    <div class="text-right">
        <Container>
            <img src={logo} width="320px" height="120px"/>
        </Container>
    </div>
    <Container>
    <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Omnix</Breadcrumb.Item>
        </Breadcrumb>

        <h3>GET TRAINED FROM THE WORLD'S BEST TRAINERS IF YOU WANT A CAREER IN THE FIELD OF DESIGN & CONSTRUCTION</h3>
    <div className=''>
        <img src={image} className='img-fluid my-5' style={{borderRadius:'10px' }}/>
    </div>
    </Container>
    </div>
    <div className='omnix-world'>
        <Container>
        <p><b>Certificates: </b> BIM , FormIt, Infraworks, Revit MEP </p>
        <p><b>Trainers:</b> To Be Recieved</p>
        <p> <b>Program Structure:</b> To be Received.</p>
        <p> <b>Benefits: </b> 
            International Certification /
            Work Opportunities /
            Internship Opportunities
            </p>
            <p><b>Mode of Study: </b> Online</p>
            <p><b>Fees:</b> To be Received.</p>
            </Container>
    </div>
  </>
  )
}

export default Omnix