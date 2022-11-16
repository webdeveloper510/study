import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function analysis_content() {
  return (
    <>
      <section className='bodys1'>
        <div className='header1'>
          <Navbar bg="blue" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><img src={Logo} className="img-fluid" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link  href="/artificial_info">Home</Nav.Link>
                  <Nav.Link className='active' href="/artificial_content">Destination</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />

                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </div>
        <div className='overlay1 pt-5'>
          <Container>
          <Row>
<Col md={6}>
  <div className='mt-5'>
    <h4 className='title'>LEARNING OUTCOMES</h4>
    <p>-Understand the features of artificial intelligence.</p>
    <p>-Understand functions of artificial intelligence.</p>
    <p>-Understand concerns relating to the use of artificial intelligence</p>
    <p>-Understand the future of artificial intelligence</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant Work Experience in The Field/ High School Level Qualification</p>
   
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-History and foundations of artificial intelligence.</p>
    <p>-Uses of artificial intelligence</p>
    <p>-Benefits of artificial intelligence.</p>
    <p>-Challenges in the use of artificial intelligence</p>
    <p>Risks of using artificial intelligence</p>
    <p>- Limitations in the use of artificial intelligence.</p>
    <p>-Problem solving and searching.</p>
    <p>-Cyber security.</p>
    <p>-Natural language processing.</p>
    <p>-Machine learning.</p>
    <p>-Environments.</p>
    <p>Agents.</p>
    <p>-Artificial intelligence to make decisions.</p>
    <p>-Intelligent agent’s properties.</p>
    <p>-Artificial intelligence techniques.</p>
    <p>-Concerns and perceptions</p>
    <p>-Ethical considerations.</p>
    <p>- Change people’s perceptions.</p>
    <p>- Keeping up to date.</p>
    <p>- Collaborative working between humans and technology.</p>
    <p>- Future technologies..</p>
   
    
  </div>
</Col>
</Row>
           


          </Container>
        </div>
      </section>

    </>
  )
}

export default analysis_content