import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function Howto() {
  return (
    <>
    <div className=''>
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
       <img src="../images/Omnix.png" width="420px" height="120px" alt="" />
   </div>
   <Breadcrumb>
           <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
           <Breadcrumb.Item active>How to Do Business/Work/Study in Dubai:</Breadcrumb.Item>
       </Breadcrumb>

       <h3>WANT THE LIFE IN CAMBRIDGE AND HAVE A CHANCE TO WORK IN THE UK, JOIN ARU THE UNIVERSITY IN CAMBRIDGE, AND WITH ADDITIONAL BENEFITS OF CAMBRIDGE UNIVERSITY</h3>
       <div className='my-4'>
       <img src="../images/OMNIX-01.png" width="100%" height="600px" alt="" />
   </div>
   </div>
  </>
  )
}

export default Howto