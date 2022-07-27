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
          
             <div className="image2"> <img src={brain2}  height={'120px'}/> </div>
             <div className="image5"> <img src={brain5} height={'120px'}/> </div>
             <div className="image3"> <img src={brain3} height={'120px'}/> </div>
             <div className="image4"> <img src={brain4} height={'100px'}/> </div>
             
             <div className="image6"> <img src={brain6} height={'90px'}/> </div>
             <div className="image7"> <img src={brain7} height={'75px'}/> </div>
             <div className="image1"> <img src={brain1} height={'180px'}/> </div>

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