
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoHome from '../images/MCAST.png'
import photo from '../images/mcast-02.png'
import photo1 from '../images/mcast-03.png'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import logo from '../images/Seeding Brains UI/logo.png'
import { Button } from 'react-bootstrap';

function Mcast() {
  return (
    <>
      <div className='header'>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img src={logo} className="img-fluid" /></Navbar.Brand>
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
      <div className='Credentials'>

        <Container>
          <div className="">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>MCAST</Breadcrumb.Item>
            </Breadcrumb>
            <h3 className='my-5'>GET A EUROPEAN DEGREE AND WORK OPPORTUNITIES IN THE EUROPEAN REGION </h3>
            <div className='home_logo my-5'>
              <img src={LogoHome} width="420px" height="120px" alt="" />
            </div>
          </div>
          <h2>Overview</h2>
          <p>MCAST provides an excellent chance for students looking for an International
            Qualification. Our Programs are designed by the Industry professionals, has a
            history of turning out graduates with the top talents that organizations demand
            and get chance to be a part of the European Region.
          </p>
          <Button variant="danger">Apply Now</Button>

        </Container>
      </div>
      <div className='offered'>
        <Container>
          <Row className='mb-3'>
            <Col md="6">
              <div className=''>
                <h2 className='mb-3'>Qualifications Offered</h2>
                <ul>
                  <li>MBA
                    <ol>
                      <li> Small Business</li>
                    </ol>
                  </li>
                  <li>
                    MSc
                    <ol>
                      <li>Information Technology & Systems</li>
                    </ol>
                  </li>
                  <li>
                    Combination Program (PGDBM - MBA)
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="6">
              <div className='programs'>
                <img src={photo1} height={'100px'} width={'100px'}/>
                <p>Our MBA program seeks to build confident, forward- thinking executives who can mix strategic
                  thinking with excellent operational focus in prder to meet the evidence-based requirement for qualified managers.
                </p>
              </div>
            </Col>
          </Row>
          <p>Mode of Learning : Online / On Campus</p>
        </Container>
      </div>
      <div className='Masters'>
        <Container>

        {/* -------Masters of Business Administration (MBA) for the SMALL BUSINESS section Start--------------- */}


          <h4 className="business">Masters of Business Administration (MBA) for the SMALL BUSINESS</h4>
          <h2 className="mt-3">Key Highlights</h2>
          <Row className="mt-3 mb-3">
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
                  <li>9) Duration - 2 Years</li>
                  <li>10) Credits - 90 ECTS</li>
                </ol>
              </div>

            </Col>
            <Col md="12">
              <div className='entry'>
                <h3>
                  Entry Requirements
                </h3>
                <p>First degree in business; management or a technological programme.</p>
                <p>Candidates  must also have 2 years work experience.</p>
              </div>
            </Col>
          </Row>
          <div className=''>
            <h3>Course Overview</h3>
            <p>The MBA for the Small Business programme focuses on the theoretical knowledge, application-oriented experiences, and identification of innovation possibilities and growth potentials of the small business or strategic business units. Learners will be able to understand the fundamental concepts of business management, business development, as well as operations and project management within a small business. MCAST works very closely with small businesses to design and continuously develop this MBA programme that comprises 10 modules and a Master’s Dissertation.
            </p>
          </div>
          <Row className='mb-3'>
            <Col md="9">
              <h3>Learning Outcomes</h3>
              <h5>Upon successful completion of this Masters Programme the learners will be able to: </h5>
              <p> - Understand and satisfy the business needs and requirements of micro and small businesses within local industry.
              </p>
              <p> - Identify innovation possibilities and growth potentials within choice companies, and act to address these possibilities.</p>
              <p> - Develop critical thinking abilities and foster analytical skills to address today’s toughest business challenges.</p>
              <p> - Act as a business leader who is capable of leading, motivating and operating within a small business venture</p>
            </Col>
            <Col md="3">
               <img src={photo} className='img-fluid'/>
            </Col>
          </Row>
          <div className='Instructors'>
            <h4>Instructors: <a href="https://intranet.mcast.edu.mt/">https://intranet.mcast.edu.mt/</a></h4>
          </div>
          <h3>Program Structure:</h3>
           <div className="program">
                  
                  <h4> - Academic Year 1 (Semesters 1 & 2: 30 ECTS) – Exit Option: Post Graduate Certificate</h4>
                <Row className='mb-3'>
                  <Col md={12}>
                  <ul>
                    <li>Applied Research and Development</li>
                    <li>Business Analytics</li>
                    <li>Strategy and Small Business Growth</li>
                    <li>Lean Start-up</li>
                    <li>Accounting for Managers</li>
                  </ul>
                  </Col>
                </Row>
                
                  <h4> - Academic Year 2 (Semesters 3 & 4: 30 ECTS) – Exit Option: Post Graduate Diploma</h4>
                  <ol>
                    <li>Entrepreneurship & Innovation Management</li>
                    <li>Development Economics</li>
                    <li>Small Business Marketing</li>
                  </ol>

                  <h4>- Elective Advanced Professional Studies - (Any 2 Modules)</h4>
                  <ol>
                    <li>Basics of Project Management</li>
                    <li>Financial Analysis</li>
                    <li>Lean Leadership</li>
                  </ol>
                <h4> - Academic Year 3 (Semester 5: 30 ECTS) – Final Exit: Masters</h4>
                <ol>
                  <li>Dissertation</li>
                </ol>
             </div>
             <h4 className="mt-4">Fee Structure: </h4>
             <hr/>
        {/* -------Masters of Science (MSc) in Information Technology & Systems section Start--------------- */}

        <h4 className="business">Masters of Science (MSc) in Information Technology & Systems</h4>
          <h2 className="mt-3">Key Highlights</h2>
          <Row className="mt-3 mb-3">
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
                  <li>9) Duration - 2 Years</li>
                  <li>10) Credits - 90 ECTS</li>
                </ol>
              </div>

            </Col>
            <Col md="12">
              <div className='entry'>
                <h3>
                  Entry Requirements
                </h3>
                <p>First degree in engineering; ICT; Technology.</p>
                <p>IELTS – 6.5</p>
              </div>
            </Col>
          </Row>
          <div className=''>
            <h3>Course Overview</h3>
            <p>The Master of Science in Information Technology and Systems provides fundamental 
              skills in a variety of advanced ICT areas such as cloud computing, big data and the 
              Internet of Things (IoT), with a focus on developing intelligent solutions through
               a blend of hardware and software. The programme focuses on software as a service
                infrastructure, information management, enterprise systems and eLogistics. Also a
                 focus is placed on systems strategy and management, business process innovation 
                 and cyber security. Key to the programme is network security and data management
                  technologies, as well as software defined networking, and the new field of distributed
                   hashing and computing, typified by distributed version control systems and blockchain
                    based crypto-currency applications.  </p>
          </div>
          <Row className='mb-3'>
            <Col md="9">
              <h3>Learning Outcomes</h3>
              <h5>Upon successful completion of this masters programme the learners will be able to: </h5>
              <p> - Understand two complementary problem domains information technology and business management domains.
              </p>
              <p> - Use the acquired technical and business problem analysis skill set to most effectively propose information system designs matched to the business needs.</p>
              <p> - Select adequate technical means to design a solution that not only solves a specified technical and business problem but is also extendable into the future in response to any additional needs of a growing business organisation.</p>
              <p> - Design an information system that optimally matches specified purpose and business system roles while minimizing design effort and implementation costs.</p>
              <p> - Build systems features that make the overall system use, administration and maintenance team-friendly; perform adequate reengineering of an existing information technology powered business system.</p>
              <p> - Design complementary subsystems to enhance business efficiency; use predictive analytics methods and big data processing to define the market for a new product or service;</p>
            </Col>
            <Col md="3">
               <img src={photo} className='img-fluid'/>
            </Col>
          </Row>
         
          <h3>Program Structure:</h3>
           <div className="program">
                  
                  <h4> - Academic Year 1</h4>
                <Row className='mb-3'>
                  <Col md={12}>
                  <ul>
                    <li>Information Systems and Management</li>
                    <li>Operating Systems and Cloud Computing</li>
                    <li>Network Protocols and Network Automation</li>
                    <li>Data Science and Predictive Analysis</li>
                    <li>Foundations of Cyber Security</li>
                  
                    <li>Web Technologies and Secure E-Commerce</li>
                    <li>Mobile Computing and 5G Networking</li>
                    <li>Internet of Things (IoT)</li>
                    <li>Financial Computing and Cryptocurrencies</li>
                    <li>Entrepreneurship and Innovation Management</li>
                  </ul>
                  </Col>
                </Row>
                
                  <h4> - Academic Year 2</h4>
                  <ol>
                    <li>Dissertation</li>
                  </ol>
             </div>
             <h4 className="mt-4">Fee Structure: </h4>
<hr/>

             {/* ------Post Graduate Diploma in Business Management + MBA  section Start ---------------*/}

             <h3 className="my-5">Combination Program</h3>
          <h4 className="business">Post Graduate Diploma in Business Management + MBA</h4>
          <h2 className="mt-3">Key Highlights</h2>
          <Row className="mt-3 mb-3">
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
                  <li>9) Duration - 1 Years</li>
                  <li>10) Credits - 90 ECTS</li>
                </ol>
              </div>

            </Col>
            <Col md="12">
              <div className='entry'>
                <h3>
                  Entry Requirements
                </h3>
                <p>Bachelor’s degree with Honours (minimum second class) or equivalent professional qualification.</p>
                <p>It is also desirable that the applicant has as a minimum of two years of relevant work experience.</p>
                <p>IELTS 6.0</p>
              </div>
            </Col>
          </Row>

          <p>Our Recognition of Prior Learning policy means that students’ previous learning and experience can be taken into account and they may be awarded certain qualifications or units of a qualification based on that learning or experience.</p>

            <h3>Course Overview</h3>
            <p>This programme is intended to provide a critical understanding of the functional areas of today’s
               business and integrative approaches for the development of solutions to international business 
               challenges. It provides the student with the opportunity to understand and master excellently
                the main concepts in applied research and development methods. Students will gain an essential 
                understanding of Business Analytics, including its basic concepts and implementation of statistics
               and big data. Students will understand the dynamic business environment in today’s world and to achieve 
               the objectives of both the organization and the owner/manager to that organization. This course provides 
               the student with relevant theoretical and practical knowledge of economic growth and development on the 
               national, regional and global levels. The course focuses upon financial accounting information relating to 
               profit-oriented business organizations and it provides theoretical and practical knowledge based on research and experience in the area of entrepreneurship. This course combines the elements of international marketing strategies and tactics with the characteristics and needs of today’s international markets. It introduces project management from the standpoint of a manager who must organize, plan, implement, and control 
              tasks to achieve an organization’s schedule, budget, and performance objectives. It provides the student to interpret financial indicators and benchmarks which allows the manager to allocate resources and evaluate potential projects to reap a maximum return-on-investment. This unit provides the student with a review of theory and research findings in the field of organisational behaviour.</p>
             
             <h3 className='my-4'>Learning Outcomes</h3>
             <ul>
              <li>Demonstrate professionalism, self-awareness, leadership, and effective communication in a team based environment.</li>
              <li>Possess the skills required to integrate concepts from various disciplines to identify and develop business strategies.</li>
              <li>Demonstrate entrepreneurial, creative and innovative skills in managing and running an organisation.</li>
              <li>Apply knowledge and skills to solve business problems.</li>
              <li>Analyze and apply accounting information to facilitate strategic decision making.</li>
              <li>Employ financial decision models to select appropriate projects for a business enterprise.</li>
             </ul>

             <div className='Instructors'>
            <h4>Instructors: <a href="https://intranet.mcast.edu.mt/">https://intranet.mcast.edu.mt/</a></h4>
          </div>
          <h3>Program Structure:</h3>
          <h4>Core Units:</h4>
          <ul>
            <li>1) Applied Research & Development</li>
            <li>2) Business Analytics</li>
            <li>3) Dynamic Strategic Management </li>
            <li>4) Development Economics</li>
            <li>5) Accounting for Managers</li>
            <li>6) Contemporary Entrepreneurship Management</li>
            <li>7) Strategic International marketing</li>
            <li>8) Project Management</li>
            <li>9) Financial Analysis</li>
            <li>10) Organisational Behaviour</li>
          </ul>

          <h4 className="mt-4">Fee Structure:  GBP 10,000 to 15,000</h4>
        </Container>
      </div>

    </>
  )
}

export default Mcast