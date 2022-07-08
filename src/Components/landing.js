
import React from 'react'
import { useState, useEffect } from "react"
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
import { useParams } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { universityDetails } from '../UniversityData';

function Landing() {
  const { id } = useParams()
  const [uniData,setUniData]=useState({})
  const [program,setProgramStructure]=useState([])
  useEffect(()=> {
   console.log(universityDetails)
   universityDetail(id)
}, [id])
const universityDetail=(id)=>{
  universityDetails.find((data,index)=>{
    const flag=data.id==id;
    if(flag){
      console.log(data)
      setUniData(data)
      setProgramStructure(data.programStructure)
    }
  })
}
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
            <Breadcrumb.Item active>{uniData.universityName}</Breadcrumb.Item>
        </Breadcrumb>
       
           <h3>{uniData.overview}</h3>

           <ul>
               {uniData.certificate}
           </ul>
           <img src={Logo} className="contentimage"/>
        
            <p className='mt-5'> <b>Certificate : </b> {uniData.certificate}</p>
            <p className='pb-5'><b>Faculty :</b>{uniData.instructor}</p>
        </Container>
    </div>
    <div className='Syllabus'>
        <Container>
           <h3>Program Structure :</h3>
           {/* <ul> */}
           
           {/* <li> */}

           {/* </li> */}
           {/* </ul> */}
           <Row>
               <Col md={12}>
               <ul>
               {
              program.map((data)=>(
                
                  <li> 
                       {data.name}
                   </li>
                  
              ))
            }
               </ul>
               </Col>
              
           </Row>
           {/* <div className='omage'>
               <img src={Logo} className="contentimage1"/>
               </div> */}
        </Container>
    </div>

    <div className='Benefits'>
        <Container>
            <h3>Benefits :</h3>
            <p>{uniData.benefits}</p>
            <img src={Logo} className="contentimage"/>

            <p> <b>Admission Process : </b> {uniData.admissionProcess} </p>
        </Container>
    </div>
    </>
  )
}

export default Landing