
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button , Card } from 'react-bootstrap';
import Logo from '../images/MCAST1.jpg'
import LogoHome from '../assets/logoHome.png'
import cv from '../assets/cv.png'
import copy from '../assets/copy.png'
import global from '../assets/global.png'
import presentation from '../assets/presentation.png'
import telephone from '../images/MCAST2.jpg'
import live from '../assets/live-chat.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Mcast() {
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
           <img src={Logo} className="img-fluid"/>
        
            <p className='mt-5'> <b>Certificate : </b> Apprenticeship, Diploma in furniture, ME, EE,</p>
            <p><b>Instructors:</b> <a href="https://intranet.mcast.edu.mt/">https://intranet.mcast.edu.mt/</a></p>
            <p className='pb-5'><b>Faculty :</b></p>
        </Container>
    </div>
    <div className='Syllabus'>
        <Container>
        <h3>Program Structure :</h3>
           <ul>
               <li>Level 4+ 5 + 6  </li>
                <li>Level 4+5 and Top-Up</li>
           </ul>
           <p><b>Level 4 (1st Year of Graduation)</b><br/> <b>Credits: 120</b> <br/> <b>Guided Learning Hours: 480</b> <br/><b>Core Units:</b> </p>
           
           <ul>
             <li>Business & Business Environment</li>
             <li>Marketing Process & Planning</li>
             <li>Human Resource Management</li>
             <li>Leadership & Management</li>
             <li>Accounting Principles</li>
             <li>Managing a Successful Business Project</li>
           </ul>
          <Row>
            <Col md={6}>
            <p><b>Optional Unit:</b></p>
           <ul>
             <li>Innovation and Commercialisation</li>
           </ul>
           <p><b>After Completion of the 1st Year the student Progresses to Level 5.</b></p>
           <p><b>Level 5: (2nd Year of Graduation)</b><br/> <b>Credits: 120</b> <br/> <b>Guided Learning Hours: 480</b> <br/><b>Core Units:</b> </p>
             <ul>
               <li>Research Project (Pearson Set)</li>
               <li>Organizational Behaviour</li>
             </ul>
             <p><b>Optional Unit:</b></p>
             <ul>
               <li>Understanding and Leading Change</li>
               <li>Global Business Environment</li>
               <li>Principles of Operations Management</li>
               <li>Business Strategy</li>
               <li>International Marketing</li>
             </ul>
           <p><b>Level 6: (3rd Year of Graduation)</b><br/> <b>Credits: 120</b> <br/> <b>Guided Learning Hours: </b></p>
           <p><b>Core Units:</b></p>
           <ul>
             <li>Financial Principles and Techniques for Non-specialists</li>
             <li>Strategic Management</li>
             <li>Innovation and Creativity in Business</li>
             <li>Supply Chain Management</li>
             <li>Management and Leadership</li>
             <li>Entrepreneurship in Business</li>
             <li>Change Management</li>
             <li>Contemporary Issues in Business</li>
           </ul>
            <p><b>Top Up:</b><br/> <b>Credits: 60/90/120</b></p>
            <p><b>University TieUps:</b></p>
            <ul>
              <li>Anglia Rukin University</li>
              <li>Bolton University</li>
              <li>University of Wales Trinity Saint David</li>
              <li>University of Gloucestershire</li>
              <li>Derby University & Many More.</li>
            </ul>
            <p><b>Mode of Learning:</b>  Online / On Campus</p>
            </Col>
            <Col md={6}>
              <img src={telephone} className="img-fluid"/>
            </Col>
          </Row>
          
         
        </Container>
    </div>

    <div className='Benefits'>
        <Container>
          <p><b>Level 7 - Postgraduate Diploma in Business and Administration</b></p>
          <p><b>Level 7 - Learning Outcomes.</b></p>
          <p><b>Postgraduate Diploma in Business and Administration</b></p>
          <ol>
            <li>Demonstrate professionalism, self-awareness, leadership, and effective communication in a team based environment.</li>
            <li>Possess the skills required to integrate concepts from various disciplines to identify and develop business strategies.</li>
            <li>Demonstrate entrepreneurial, creative and innovative skills in managing and running an organisation.</li>
            <li>Apply knowledge and skills to solve business problems.</li>
            <li>Analyze and apply accounting information to facilitate strategic decision making.</li>
            <li>Employ financial decision models to select appropriate projects for a business enterprise.</li>
          </ol>

          <p><b>Core Units:</b></p>
          <ol>
            <li>Applied Research & Development</li>
            <li>Business Analytics</li>
            <li>Dynamic Strategic Management</li>
            <li>Development Economics</li>
            <li>Accounting for Managers</li>
            <li>Contemporary Entrepreneurship Management</li>
            <li>Strategic International marketing</li>
            <li>Project Management</li>
            <li>Financial Analysis</li>
            <li>Organisational Behaviour</li>
          </ol>
          <p><b style={{color:'red'}}>Entry Requirement:</b></p>
          <ul>
            <li>Relevant & Related Level 3 qualification in the Prefered Area of Specialization</li>
            <li>GCE Advanced Level profile that demonstrates strong performance in a relevant subject or adequate performance in more than one GCE subject. </li>
            <li>An Access to Higher Education Diploma from an approved further education institution</li>
            <li>Relevant work experience</li>
            <li>An international equivalent to the above qualifications.</li>
          </ul>
          <p>Our Recognition of Prior Learning policy means that students’ previous learning and experience can be taken into account and they may be awarded certain qualifications or units of a qualification based on that learning or experience.</p>
            <h3 style={{color:'red'}}>Benefits :</h3>
            <p>Post Study Work Visa / Paid Internships </p>
            <p> <b style={{color:'red'}}>Mode of Study: </b> Online </p>
            <p><b style={{color:'red'}}>Fees:</b></p>
        </Container>
    </div>
    </>
  )
}

export default Mcast