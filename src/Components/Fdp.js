import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/FDP.png'
import fdp from '../images/FDP-01.png'
function Fdp() {
  return (
    <>
     <div className='fdp'>
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
          <img src={logo} width="320px" height="120px"/>
      </div>
       <Breadcrumb >
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Instructor Development Program</Breadcrumb.Item>
        </Breadcrumb>
        <h3 className='my-5'>WANT TO DEVELOP YOUR PROFESSIONAL CAREER, GET THE FDP CERTIFCATE FROM THE RENOWED ARU AND GET THE BEST OUT OF THE LOT</h3>
      <div className='my-4'>
        <img src={fdp} className='img-fluid '/>
      </div>

        <p><b>Certificates: </b> Faculty Development Program</p>
        <p><b>Instructor:</b> <a href=" https://aru.ac.uk/business-and-law/our-people"> https://aru.ac.uk/business-and-law/our-people</a></p>
        <p className='pb-5'> Dr Simon Evans (Director International Partnership)<br/>
                Faculty of Business & Law<br/>
                Anglia Ruskin University.
                </p>
      </Container>
    </div>
    <div className='fdp-world'>
      <Container>
        <h3>Program Structure:</h3>
           <ul>
                <li>Create a welcoming, encouraging, and inclusive learning atmosphere for postsecondary education by using rapport-building strategies.</li>
                <li>Deliver a lesson that closes the knowledge gap between you and your students in a powerful, memorable way.</li>
                <li>By employing efficient third-level education teaching strategies, you can improve your institutional reputation as a reflective teacher.</li>
                <li>Implement useful techniques for lesson planning and classroom management</li>
           </ul>
          <p><b>Benefits:</b> Professional Development / Networking</p>
          <p><b>Mode of Study:</b> Online</p>
          <p><b>Fees:</b><br/>
            UK: GBP 500<br/>
            UAE: AED 2000<br/>
            India: INR 5000
            </p>
       </Container>
    </div>
    </>
  )
}

export default Fdp