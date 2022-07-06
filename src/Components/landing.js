
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button , Card } from 'react-bootstrap';
import Logo from '../assets/deakin.webp'
import LogoHome from '../assets/logoHome.png'
import cv from '../assets/cv.png'
import copy from '../assets/copy.png'
import global from '../assets/global.png'
import presentation from '../assets/presentation.png'
import telephone from '../assets/telephone.png'
import live from '../assets/live-chat.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function landing() {
  return (
    <>
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
    

    <div className='Credentials'>
     
        <Container>
            <div className='text-right'>
            <img src={LogoHome} className='img-fluid'/>
            </div>
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>MCAST</Breadcrumb.Item>
        </Breadcrumb>
       
           <h3>GET A EUROPEAN DEGREE AND WORK <br/> OPPORTUNITIES IN THE EUROPEAN REGION </h3>

           <ul>
               <li>Apprenticeship</li>
               <li>Diploma in furniture</li>
               <li> ME</li>
               <li>EE</li>
           </ul>
           <img src={Logo} className="contentimage"/>
        
            <p className='mt-5'> <b>Certificate : </b> Apprenticeship, Diploma in furniture, ME, EE,</p>
            <p className='pb-5'><b>Faculty :</b></p>
        </Container>
    </div>
    <div className='Syllabus'>
        <Container>
           <h3>Program Structure :</h3>
           <ul>
               <li>Level 4+ 5 + 6 / Level 4+5 and Top-Up / Level 7 + 
                   Postgraduate Diploma in Business and Adminstration /
                    Demostrate professionalism, self- awreness, 
                   Leadership, and effective communication in a team based environment. </li>
                <li>Possess the skills required to integrate concepts from various
                        disciplines to identify anddevelop business strategies.</li>
                <li>Demonstrate entrepreueurial, creative and innovative skills in
                     managing and running an organisation.</li>
                <li>Apply knowledge and skills to solve bussiness problems</li>
                <li>Analyze and apply accounting information to facilitate strategic decision making </li>
                <li>
                Employ financial decision models to select appropriate projects for a businessenterprise / Applied Reserch & Development.
                </li>
           </ul>
           <Row>
               <Col md={6}>
               <ul>
                   <li>
                         Business Analytices.
                   </li>
                   <li>
                         Dynamir Strategic  Management.
                   </li>
                   <li>
                        Development Economices.
                   </li>
                   <li>
                        Accounting for Managers.
                   </li>
                   <li>
                        Coutemporary Entrepreneurship Mnagement.
                   </li>
                   <li>
                        Strategic International marketing.
                   </li>
               </ul>
               </Col>
               <Col md={6}>
               <img src={Logo} className="contentimage"/>
               </Col>
           </Row>
        </Container>
    </div>

    <div className='Benefits'>
        <Container>
            <h3>Benefits :</h3>
            <p>Post Study Work Visa / Paid Internships / Guaranteed Jobs</p>
            <img src={Logo} className="contentimage"/>

            <p> <b>Admission Process : </b> Online </p>
        </Container>
    </div>
    </>
  )
}

export default landing