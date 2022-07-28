import React,{useState,useEffect} from "react";
import "../App.scss";
import FlipCard from "./FlipCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { universityData } from "../Data";

import brain1 from '../images/Seeding Brains UI/imag1.png'
import brain2 from '../images/Seeding Brains UI/imag2.png'
import brain3 from '../images/Seeding Brains UI/imag3.png'
import brain4 from '../images/Seeding Brains UI/imag4.png'
import brain5 from '../images/Seeding Brains UI/imag5.png'
import brain6 from '../images/Seeding Brains UI/imag6.png'
import brain7 from '../images/Seeding Brains UI/imag7.png'
import image from '../images/Seeding Brains UI/LGOG.png'
import image1 from '../images/Seeding Brains UI/LOGO1.png'
import image2 from '../images/Seeding Brains UI/LOGO2.png'
import image3 from '../images/Seeding Brains UI/LOGO3.png'
import image4 from '../images/Seeding Brains UI/LOGO4.png'
import image5 from '../images/Seeding Brains UI/LOGO5.png'
import image6 from '../images/Seeding Brains UI/LOGO6.png'
import image7 from '../images/Seeding Brains UI/LOGO7.png'
import image8 from '../images/Seeding Brains UI/LOGO8.png'
import image9 from '../images/Seeding Brains UI/LOGO9.png'
import image10 from '../images/Seeding Brains UI/LOGO10.png'
import image11 from '../images/Seeding Brains UI/LOGO11.png'
import image12 from '../images/Seeding Brains UI/LOGO12.png'
import image13 from '../images/Seeding Brains UI/LOGO13.png'
import image14 from '../images/Seeding Brains UI/LOGO14.png'
import image15 from '../images/Seeding Brains UI/LOGO15.png'
import image16 from '../images/Seeding Brains UI/LOGO16.png'
import image17 from '../images/Seeding Brains UI/LOGO17.png'
import sam from '../images/Seeding Brains UI/Stem1.png'
import sam1 from '../images/Seeding Brains UI/Stem2.png'

const cards = [
    {
      id: "1",
      variant: "hover",
      front: "Test University",
      back: "details Of University"
    },
  ];
  

const HomePage = () => {  
  useEffect(()=>{
console.log('uni',uniData)
 },[])
 const[uniData,setUniData]=useState(universityData)
    return (
        <div>
         <div className="container">
           <div className="brain">
          
             <div className="image2 position-relative"> <img src={brain2}  height={'120px'} alt="" className="main"/> 
             <div className="brainimag7">
                  <img className="collage" src={image} height={'75px'} alt=""/>
                  <img className="collage1" src={image1} height={'75px'} alt=""/>
                  <img className="collage2" src={image2} height={'75px'} alt=""/>
                
               </div></div>
             <div className="image5 position-relative"> <img src={brain5} height={'120px'} alt="" className="main"/> 
             <div className="brainimag6">
             <img className="collage3" src={image3} height={'75px'} alt=""/>
                  <img className="collage4" src={image5} height={'75px'} alt=""/>
                  <img className="collage5" src={image6} height={'75px'} alt=""/>
                
               </div></div>
             <div className="image3 position-relative"> <img src={brain3} height={'120px'} alt="" className="main"/> 
             <div className="brainimag5">
             <img className="collage6" src={image7} height={'75px'} alt=""/>
                  <img className="collage7" src={image8} height={'75px'} alt=""/>
                  <img className="collage8" src={image9} height={'75px'} alt=""/>
                 
               </div></div>
             <div className="image4 position-relative"> <img src={brain4} height={'100px'} alt="" className="main"/> 
             <div className="brainimag4">
             <img className="collage9" src={image10} height={'75px'} alt=""/>
                  <img className="collage10" src={image11} height={'75px'} alt=""/>
                  <img className="collage11" src={image12} height={'75px'} alt=""/>
                
               </div></div>
             
             <div className="image6 position-relative"> <img src={brain6} height={'90px'} alt="" className="main"/> 
             <div className="brainimag3">
             <img className="collage12" src={image13} height={'75px'} alt=""/>
                  <img className="collage13" src={image14} height={'75px'} alt=""/>
                  <img className="collage14" src={image15} height={'75px'} alt=""/>
               

               </div></div>
             <div className="image7 position-relative"> <img src={brain7} height={'75px'} alt="" className="main"/> 
             <div className="brainimag2">
             <img className="collage15" src={image16} height={'75px'} alt=""/>
                  <img className="collage16" src={image17} height={'75px'} alt=""/>
               </div>
             </div>
             <div className="image1 position-relative"> <img src={brain1} height={'180px'} alt="" className="main"/>
               <div className="brainimag1">
                  <img className="collage24" src={sam} height={'75px'} alt=""/>
                  <img className="collage25" src={sam1} height={'75px'} alt=""/>
               </div>
              </div>

           </div>



      <div className="row ">
       
          {uniData.map((card) => (
             <div className="col-md-3">
            <FlipCard key={card.id} card={card} />
            </div>
          ))}
        
      </div>
    </div>
            </div>
    )
}
export default HomePage;