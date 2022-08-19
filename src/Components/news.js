import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../images/ARU-01.png'
import slider2 from '../images/MU.jpg'
import slider3 from '../images/FDP-01.png'
import news from '../images/MCAST2.jpg'
import news1 from '../images/ARU-02.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function componentName() {
    return (
        <>
            <div className='header'>
                <Container fluid>
                    <Row>
                        <Col md={3}>
                           <img src="" className='img-fluid' alt='logo'/>
                        </Col>
                        <Col md={6}>
                            <div className=''>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="primary" id="button-addon2">
                                    <span class="material-symbols-outlined">search</span>
                                    </Button>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='signin'>
                                <ul>
                                    <li> Sign in <span class="material-symbols-sharp">person_add</span></li>
                                    <li><span class="material-symbols-sharp">settings</span></li>
                                    <li><span class="material-symbols-sharp">language</span></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
           
           
            <div className='bodys pb-4'>
                <Container>
                    <div className="content">
                        <Row>
                            <Col md={7}>
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
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <Card className='mb-3'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <Card className='mb-3'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing and typesetting .</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <div className='issue'>
                                    <img src={news} className='img-fluid' />
                                    <div className='slider-content'>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <Card className='mb-3 mt-2'>
                                    <div className='card-body'>
                                        <Row>
                                            <Col md={4}>
                                                <img src={news} height={'85px'} width={'100%'} />
                                            </Col>
                                            <Col md={8}>
                                                <div className='news-content'>
                                                    <a href="">Lorem Ipsum is simply dummy text of the printing and typesetting .</a>
                                                    <div className='news-bottom'>
                                                        <div className='d-flex'>
                                                            <img src={slider1} height="16px" width="16px" />
                                                            <p>Lorem Ipsum</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                                <Card className='mb-3'>
                                    <div className='card-body'>
                                        <Row>
                                            <Col md={4}>
                                                <img src={news} height={'85px'} width={'100%'} />
                                            </Col>
                                            <Col md={8}>
                                                <div className='news-content'>
                                                    <a href="">Lorem Ipsum is simply dummy text of the printing and typesetting .</a>
                                                    <div className='news-bottom'>
                                                        <div className='d-flex'>
                                                            <img src={slider1} height="16px" width="16px" />
                                                            <p>Lorem Ipsum</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                                <Card className='mb-3'>
                                    <div className='card-body'>
                                        <Row>
                                            <Col md={4}>
                                                <img src={news} height={'85px'} width={'100%'} />
                                            </Col>
                                            <Col md={8}>
                                                <div className='news-content'>
                                                    <a href="">Lorem Ipsum is simply dummy text of the printing and typesetting.</a>
                                                    <div className='news-bottom'>
                                                        <div className='d-flex'>
                                                            <img src={slider1} height="16px" width="16px" />
                                                            <p>Lorem Ipsum</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                                <Card className='mb-3'>
                                    <div className='card-body'>
                                        <Row>
                                            <Col md={4}>
                                                <img src={news} height={'85px'} width={'100%'} />
                                            </Col>
                                            <Col md={8}>
                                                <div className='news-content'>
                                                    <a href="">Lorem Ipsum is simply dummy text of the printing and typesetting.</a>
                                                    <div className='news-bottom'>
                                                        <div className='d-flex'>
                                                            <img src={slider1} height="16px" width="16px" />
                                                            <p>Lorem Ipsum</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={2}>

                            </Col>
                        </Row>
                        <hr />
                    </div>

                    {/* -----------trending section start------------------------ */}

                    <div className='trending mb-4'>
                        <div className='d-flex'>
                            <h2>Trending In Your Language</h2>
                            <ul>
                                <li>তাজা খবর</li>
                                <li>ठळक बातम्या</li>
                                <li>AP, తెలంగాణ న్యూస్</li>
                                <li>समाचार</li>
                            </ul>
                        </div>

                        <div className='my-3'>
                            <Row>
                                <Col md={3}>
                                    <Card>
                                        <img src={news1} className="img-fluid" />
                                        <div className='card-body'>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            <div className='card-bottom'>
                                                <div className='d-flex'>
                                                    <img src={news1} width={'20px'} height={'20px'} />
                                                    <p className='m-0 ps-3'> Lorem Ipsum </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <img src={news1} className="img-fluid" />
                                        <div className='card-body'>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            <div className='card-bottom'>
                                                <div className='d-flex'>
                                                    <img src={news1} width={'20px'} height={'20px'} />
                                                    <p className='m-0 ps-3'> Lorem Ipsum </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>

                        </div>
                    </div>
                      <hr/>
                     {/* -----------News section start------------------------ */}

                     <div className='trending my-4'>
                        <div className='d-flex'>
                            <h2>News</h2>
                            <ul>
                                <li>তাজা খবর</li>
                                <li>ठळक बातम्या</li>
                                <li>AP, తెలంగాణ న్యూస్</li>
                                <li>समाचार</li>
                            </ul>
                        </div>

                        <div className='my-3'>
                            <Row>
                                <Col md={3}>
                                    <Card>
                                        <img src={news1} className="img-fluid" />
                                        <div className='card-body'>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            <div className='card-bottom'>
                                                <div className='d-flex'>
                                                    <img src={news1} width={'20px'} height={'20px'} />
                                                    <p className='m-0 ps-3'> Lorem Ipsum </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <img src={news1} className="img-fluid" />
                                        <div className='card-body'>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            <div className='card-bottom'>
                                                <div className='d-flex'>
                                                    <img src={news1} width={'20px'} height={'20px'} />
                                                    <p className='m-0 ps-3'> Lorem Ipsum </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>

                        </div>
                    </div>
                    <hr/>

                     {/* -----------Sports section start------------------------ */}

                     <div className='trending my-4'>
                        <div className='d-flex'>
                            <h2>Sports</h2>
                            <ul>
                                <li>তাজা খবর</li>
                                <li>ठळक बातम्या</li>
                                <li>AP, తెలంగాణ న్యూస్</li>
                                <li>समाचार</li>
                            </ul>
                        </div>

                        <div className='my-3'>
                            <Row>
                                <Col md={3}>
                                    <Card>
                                        <img src={news1} className="img-fluid" />
                                        <div className='card-body'>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            <div className='card-bottom'>
                                                <div className='d-flex'>
                                                    <img src={news1} width={'20px'} height={'20px'} />
                                                    <p className='m-0 ps-3'> Lorem Ipsum </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <img src={news1} className="img-fluid" />
                                        <div className='card-body'>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            <div className='card-bottom'>
                                                <div className='d-flex'>
                                                    <img src={news1} width={'20px'} height={'20px'} />
                                                    <p className='m-0 ps-3'> Lorem Ipsum </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>

                        </div>
                    </div>
                    <hr/>
                     {/* -----------Entertainment section start------------------------ */}

                     <div className='trending my-4'>
                        <div className='d-flex'>
                            <h2>Entertainment</h2>
                            <ul>
                                <li>তাজা খবর</li>
                                <li>ठळक बातम्या</li>
                                <li>AP, తెలంగాణ న్యూస్</li>
                                <li>समाचार</li>
                            </ul>
                        </div>

                        <div className='my-3'>
                            <Row>
                                <Col md={6}>
                                <video width="100%" height="367" controls >
                                    <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4"/>
                                </video>

                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <hr />
                                        <Card className='dummy'>
                                            <div className='card-body'>
                                                <Row>
                                                    <Col md={4}>
                                                        <img src={news} height={'85px'} width={'100%'} />
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className='news-content'>
                                                            <a href="">Lorem Ipsum is simply dummy text of the printing.</a>
                                                            <div className='news-bottom'>
                                                                <div className='d-flex'>
                                                                    <img src={slider1} height="16px" width="16px" />
                                                                    <p>Lorem Ipsum</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    </Card>
                                </Col>
                               
                            </Row>

                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
