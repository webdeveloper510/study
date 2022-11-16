import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../../images/Seeding Brains UI/logo.png'
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';


function desk() {
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
                <Nav.Link  href="/brand">Home</Nav.Link>               
                  <Nav.Link className='active' href="/desk">Destination</Nav.Link>
                  
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
    <h4 className='title'>learning outcomes</h4>
    <p>-Analyse how a brand is built and managed over time.</p>
    <p>-Create a brand portfolio strategy to organise portfolios and manage brand hierarchies.</p>
    <p>-Evaluate how brands are leveraged/ extended over time domestically and internationally</p>
    <p>-Apply techniques for measuring and managing brand value over a period of time.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant work experience in the field/ High school level
      qualification</p>
   
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
  <h4 className='title'>Course Content</h4>
    <p>-Brand development</p>
    <p>-Advantages of branding.</p>
    <p>-Brand equity.</p>
    <p>-Strategies that organisations use to develop and grow brand equity.</p>
    <p>-The role of marketing in building brand equity, brand positioning and techniques</p>
    <p>-How to strengthen brand equity, brand extensions, reinforcing and revitalising brands through innovation.</p>
    <p>-Overcoming brand crisis</p>
    <p>-Brand portfolio strategy.</p>
    <p>-Relationship between branding and finance.</p>
    <p>-Open and closed approaches to innovation</p>
    <p>-Market pull vs technology push.</p>
    <p>-Diffusion theory</p>
    <p>-The use of the innovation funnel to manage new solutions and
      idea development</p>
    <p>-The 4Ps and innovation space strategy: product, process,
      position and paradigm</p>
    <p>- Frugal innovation in response to necessity vs market-driven
      innovation</p>
    <p>-Accessing funding and resources</p>
    <p>-Intellectual property</p>
    <p>-Key IP tools, including copyrights, trademarks, design rights and
      patents</p>
    <p>-Limitations of IP in an intemational context</p>
    <p>-Growth of open source and open innovation platforms on IP</p>
    <h4 className='title'>Student Feedback</h4>
  </div>
</Col>
</Row>
           


          </Container>
        </div>
      </section>

    </>
  )
}

export default desk