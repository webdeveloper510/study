import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/vscc.png'
import images from '../images/VSCC.jpg'
import images1 from '../images/SB.png'
import image from '../images/VSCC1.jpg'
import image1 from '../images/VSCC2.jpg'
import image2 from '../images/VSCC3.jpg'
import image3 from '../images/VSCC4.jpg'
import { Col, Row } from 'react-bootstrap';


function Vishalscc() {
  return (
 <>
   <div className='Vishalscc'>
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
            <Breadcrumb.Item active>Vishal Saxena Commerce Classes</Breadcrumb.Item>
        </Breadcrumb>

        <h3>EXCLUSIVE COURSES FOR THE STUDENTS OF NORTH INDIA IN ASSOCIATION WITH THE UK AWARDING BODIES AND GET A CHANCE TO BUILD YOUR CAREER IN THE UK AND SETTLE.</h3>
        <div className='my-4'>
        <img src={images} width="100%" height="600px"/>
    </div>
    
 
        <p><b>Certificate: </b> </p>
           <ul>
                <li>Level 4/5 HIgher National Diploma in Business Management</li>
                <li>Level 4/5 Higher National Diploma in Computing</li>
                <li>Level 7 Diploma in Strategic Leadership & Management</li>
                <li>Level 7 Diploma in Computing</li>
           </ul>
           <p><b>Instructor:</b> </p>
          <ul>
            <li>Dr Jatin Tekriwal - https://www.linkedin.com/in/jatin-tekriwal-a38410138/</li>
            <li>Mr Amritesh P Singh - https://www.linkedin.com/in/amritesh-pratap-singh-892a9813/</li>
            <li>Joy Eduviere</li>
            <li>Mirian Eduviere</li>
            <li>Shweta Sharma</li>
            <li>Himanshi Manuja - https://www.linkedin.com/in/himanshi-manuja-b61bbb13a/</li>
            <li>Dorothy</li>
            <li>Hema Sajnani - https://www.linkedin.com/in/hema-sajnani-a4b47a129/</li>
            <li>Shubham</li>
          </ul>
        </Container>
      </div>
      <div className='Vishalscc-world'>
        <Container>
       
          <p><b>Program Structure:</b></p>
          <Row className='my-3'>
            <Col md={6}>
            <p><b>Level 4 / 5 - (Business Management)</b></p>
          <ol>
            <li>Communications in Organisations</li>
            <li>Leadership and the Organisation</li>
            <li>Financial Awareness</li>
            <li>Managing Change</li>
            <li>Business Operations</li>
            <li>Developing Teams</li>
            <li>Responding to the Changing Business Environment</li>
            <li>Effective Decision Making</li>
            <li>Business Development</li>
            <li>Business Models and Growing Organisations</li>
            <li>Customer Management</li>
            <li>Risk Management and Organisations</li>
          </ol>
            </Col>
            <Col md={6}>
              <img src={image} className="img-fluid"/>
            </Col>
            </Row>
           
            <Row className='my-3'>
           <Col md={6}>
                <img src={image1} className="img-fluid"/>
            </Col> 
            <Col md={6}>
            <p><b>Level 4 / 5 (IT & Computing)</b></p>
          <ol>
            <li>Information Technology and IT Ethics</li>
            <li>Mathematics and Statistics for IT</li>
            <li>PC Maintenance and Operating Systems</li>
            <li>Computer Graphics Editing and Database Concepts</li>
            <li>Logical IT Networking</li>
            <li>Physical IT Networking</li>
            <li>Technopreneurship</li>
            <li>Network Security</li>
            <li>C#.NET Programming</li>
            <li>System Administration</li>
            <li>Network Routing and Switching</li>
            <li>Network Design and Administration</li>
          </ol>
            </Col>
                
           </Row>
           <Row className='my-3'>
             <Col md={6}>
                <p><b>Fees: Level 4 / 5 -</b> TBD </p>
                <p><b>Level 7 - (DIPLOMA IN STRATEGIC MANAGEMENT AND INNOVATION)</b></p>
                <ul>
                  <li>Finance for Managers</li>
                  <li>Strategic Direction</li>
                  <li>Strategic Marketing</li>
                  <li>Human Resource Planning</li>
                  <li>Marketing Strategy for Social Enterprise</li>
                  <li>Global Marketing</li>
                  <li>Strategic Management</li>
                </ul>
             </Col>
             <Col md={6}>
                  <img src={image2} className="img-fluid"/>
             </Col>
           </Row>

           <Row className='my-3'>
           <Col md={6}>
                <img src={image3} className="img-fluid"/>
             </Col>
             <Col md={6}>
             <p><b>Level 7 - (Extended Diploma in Computing Technologies) Year 1</b></p>
          <ol>
            <li>Managing Innovation and Change in Computing</li>
            <li>Systems Development and User Experience (UX)</li>
            <li>Implementing and Managing Cyber Security</li>
            <li>Business Intelligence Systems</li>
            <li>Independent Project</li>
            <li>Agile Transformation</li>
            <li>Enterprise Resources Planning Systems (ERP Systems)</li>
            <li>Mobile Application Development</li>
          </ol>
             </Col>
             
           </Row>
         
         
          <p><b>Fees: </b> Level 7 TBD</p>
          <p><b>Bolton University TopUp Year 2</b></p>
          <p> <b>Program: </b> MBA Top-Up</p>
          <p> <b>Duration: </b> 9 Months</p>
          <p> <b>Trimesters: </b> 3</p>
          <p><b>Unit Structure</b></p>   
          <ol>
            <li>Leadership & Management</li>
            <li>Marketing & Operations</li>
            <li>Financial Mgmt & Decision Making</li>
            <li>Strategy</li>
            <li>Organizational Behaviour</li>
            <li>Strategic HRM</li>
            <li>Professional Project</li>
            <li>Academic Skills & Proffesional Practice</li>
          </ol>
          <p><b>Benefits:</b></p>
          <ul>
            <li>Students will get Dual Certification</li>
            <li>Transcript will show 180 credits including exemptions</li>
            <li>Student is getting the placement year</li>
            <li>Students would be eligible for 1 year PSWV and additional 1 year extended visa by</li>
            <li>paying 1000GBP to the university</li>
            <li>Students are eligible for the Spouse visa for the partners</li>
          </ul>
          <p><b>Mode of Study: </b> Online</p>
          <p><b>Fees: </b>9000 Pounds </p>
          </Container>
    </div>
    </>
  )
}

export default Vishalscc