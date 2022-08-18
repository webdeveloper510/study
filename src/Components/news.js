import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../images/ARU-01.png'
import slider2 from '../images/MU.jpg'
import slider3 from '../images/FDP-01.png'

export default function componentName() {
    return (
        <>
            <Container>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>

            <div className='bodys'>
                <Container>
                    <div className="content">
                        <Row>
                            <Col md={6}>
                                <Carousel slide={false} className="mb-3">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={slider1}
                                            alt="First slide"
                                            height={'400px'}
                                        />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={slider2}
                                            alt="Second slide"
                                            height={'400px'}
                                        />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={slider3}
                                            alt="Third slide"
                                            height={'400px'}
                                        />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>

                                <Row>
                                    <Col md={6}>
                                    <Card className='mb-3'>
                                   <div className='card-body'>
                                      <Row>
                                        <Col md={4}>
                                             <img src="" className='img-fluid'/>
                                        </Col>
                                        <Col md={8}>
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                        </Col>
                                      </Row>
                                   </div>
                                </Card>
                                <Card className='mb-3'>
                                   <div className='card-body'>
                                      <Row>
                                        <Col md={4}>
                                             <img src="" className='img-fluid'/>
                                        </Col>
                                        <Col md={8}>
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                        </Col>
                                      </Row>
                                   </div>
                                </Card>
                                    </Col>
                                    <Col md={6}>
                                    <Card className='mb-3'>
                                   <div className='card-body'>
                                      <Row>
                                        <Col md={4}>
                                             <img src="" className='img-fluid'/>
                                        </Col>
                                        <Col md={8}>
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                        </Col>
                                      </Row>
                                   </div>
                                </Card>
                                <Card className='mb-3'>
                                   <div className='card-body'>
                                      <Row>
                                        <Col md={4}>
                                             <img src="" className='img-fluid'/>
                                        </Col>
                                        <Col md={8}>
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                        </Col>
                                      </Row>
                                   </div>
                                </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <div className='issue'>
                                   <img src="" className='img-fluid'/>
                                   <div className='slider-content'>
                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                   </div>
                                </div>
                                <Card className='mb-3'>
                                   <div className='card-body'>
                                      <Row>
                                        <Col md={4}>
                                             <img src="" className='img-fluid'/>
                                        </Col>
                                        <Col md={8}>
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                        </Col>
                                      </Row>
                                   </div>
                                </Card>
                                <Card className='mb-3'>
                                   <div className='card-body'>
                                      <Row>
                                        <Col md={4}>
                                             <img src="" className='img-fluid'/>
                                        </Col>
                                        <Col md={8}>
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                        </Col>
                                      </Row>
                                   </div>
                                </Card>
                                <Card className='mb-3'>
                                   <div className='card-body'>
                                      <Row>
                                        <Col md={4}>
                                             <img src="" className='img-fluid'/>
                                        </Col>
                                        <Col md={8}>
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                        </Col>
                                      </Row>
                                   </div>
                                </Card>
                                <Card className='mb-3'>
                                   <div className='card-body'>
                                      <Row>
                                        <Col md={4}>
                                             <img src="" className='img-fluid'/>
                                        </Col>
                                        <Col md={8}>
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                        </Col>
                                      </Row>
                                   </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>
        </>
    );
}
