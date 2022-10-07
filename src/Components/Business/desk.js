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
      <section className='bodys'>
        <div className='header'>
          <Navbar bg="blue" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><img src={Logo} className="img-fluid" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link  href="/business/BusinessPage">Home</Nav.Link>
                  <Nav.Link className='active' href="/business/Desk">Destination</Nav.Link>
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
        <div className='overlay pt-5'>
          <Container>
          <Row>
<Col md={6}>
  <div className='mt-5'>
    <h4 className='title'>learning outcomes</h4>
    <p>-Investigate how innovation is sourced and supported within
      different types of organisations</p>
    <p>-Explore the processing of different types of innovation within
      organisations</p>
    <p>-Apply the process required to commercialise innovation within
      an organisatioN</p>
    <p>-Evaluate the range of methods for protecting innovation within
      organisations.</p>
    <h4 className='title'>LinkedIn Jobs (certifyme API)</h4>
    <h4 className='title'>Entry requirements</h4>
    <p>-Relevant work experience in the field/ High school level
      qualification</p>
    <h4 className='title'>Course Content</h4>
    <p>-Turning invention into innovation and sources of innovation</p>
    <p>-Creating a structure and culture of innovation.</p>
    <p>-Developing innovation vision and leadership, entrepreneurial
      teams and innovation networks.</p>
    <p>-Fostering innovation in different organisations, including SMEs,
      large and multinational organisations.</p>
    <p>-Disruptive and incremental innovation</p>
    <p>-Product innovation, process and platform innovation.</p>
  </div>
</Col>
<Col md={6}>
  <div className='mt-5'>
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