import React,{useState,useEffect} from "react";
import "../App.scss";
import FlipCard from "./FlipCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { universityData } from "../Data";

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