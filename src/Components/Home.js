import React, { useState, useEffect } from "react";
import "../App.scss";
import FlipCard from "./FlipCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { universityData } from "../Data";
import { useNavigate } from 'react-router-dom';

import brain1 from '../images/Seeding Brains UI/line connect-01.png'
import brain2 from '../images/Seeding Brains UI/HTBD-01.png'
import image from '../images/Seeding Brains UI/AGI-01.png'
import image1 from '../images/Seeding Brains UI/TWI-01.png'
import image2 from '../images/Seeding Brains UI/AMS-01.png'
import image3 from '../images/Seeding Brains UI/CIIE-01.png'
import image4 from '../images/Seeding Brains UI/UKCBC-01.png'
import image5 from '../images/Seeding Brains UI/ESL-01.png'
import image6 from '../images/Seeding Brains UI/IBT-01.png'
import image7 from '../images/Seeding Brains UI/LAAT-01.png'
import image8 from '../images/Seeding Brains UI/LIIMS-01.png'
import image9 from '../images/Seeding Brains UI/REGENT-01.png'
import image10 from '../images/Seeding Brains UI/Business Mnagement-01.png'
import image11 from '../images/Seeding Brains UI/Health and social care-01.png'
import image12 from '../images/Seeding Brains UI/Project Mnagement-01.png'
import image13 from '../images/Seeding Brains UI/PUTHON PROGRAMMING-01.png'
import image14 from '../images/Seeding Brains UI/Risk Management-01.png'
import image15 from '../images/Seeding Brains UI/It Computing-01.png'
import image16 from '../images/Seeding Brains UI/LOGO16.png'
import image17 from '../images/Seeding Brains UI/LOGO17.png'

import brainL from '../images/Seeding Brains UI/Leftbrainp3-01.png'
import brainL1 from '../images/Seeding Brains UI/LeftBrainP2-01.png'
import brainL2 from '../images/Seeding Brains UI/leftbrainsP1-01.png'
import brainR from '../images/Seeding Brains UI/right.png'

const cards = [
  {
    id: "1",
    variant: "hover",
    front: "Test University",
    back: "details Of University"
  },
];


const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log('uni', uniData)
  }, [])
  const [uniData, setUniData] = useState(universityData)
  function newsPage() {
    navigate(`/news`);
  }
  function demoPage() {
    navigate(`/businessPage`);
  }
  return (
    <div>
      <div className="text-right container py-3">
        <button className="btn btn-primary" type="button" onClick={() => newsPage()} > News</button>
      </div>
      <div className="container">
        <div className="brain">
          <div className="row">
            <div class="col-md-6 text-right">
              <div className="left">
                <div className="brain-left1">
                  <img src={brainL} width={'250px'} alt="" />
                  <div className="brain-left">
                    <div className="collage1">
                      <img src={image16} height={'80px'} alt="" />
                    </div>
                    <div className="collage">
                      <img className="" src={image} height={'150px'} alt="" />
                    </div>
                    <div className="collage2">
                      <img className="p-2" src={image2} height={'150px'} alt="" />
                    </div>
                    <div className="collage9">
                      <img className="" src={image3} height={'150px'} alt="" />
                    </div>

                  </div>
                </div>
                <div className="brain-left2">
                  <img src={brainL1} width={'271px'} alt="" />
                  <div className="barin-left11">
                    <div className="collage11">
                      <img className="" src={image6} height={'150px'} alt="" />
                    </div>
                    <div className="collage6">
                      <img className="" src={image7} height={'150px'} alt="" />
                    </div>
                    <div className="collage10">
                      <img className="" src={image5} height={'150px'} alt="" />
                    </div>
                  </div>
                </div>
                <div className="brain-left3">
                  <img src={brainL2} width={'263px'} alt="" />
                  <div className="barin-left12">
                    <div className="collage7">
                      <img className="" src={image8} height={'150px'} alt="" />
                    </div>
                    <div className="collage8">
                      <img className="" src={image9} height={'120px'} alt="" />
                    </div>
                    <div className="collage20">
                      <img className="" src={image1} height={'150px'} alt="" />
                    </div>
                    <div className="collage21">
                      <img className="" src={image4} height={'150px'} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div className="right">
                <img src={brainR} width={'230px'} alt="" />
                <div className="brain-right">
                  <div className="collage4">
                    <img className="" src={image17} height={'80px'} alt="" />
                  </div>
                  <div className="collage3">
                    <div className="management">
                    <img className="" src={image10} height={'100px'} onClick={() => demoPage()} alt="" />
                    <div className="business">
                      <div className="business1"><a href='/brand'><img className="" src={image10} height={'100px'} alt="" /></a></div>
                      <div className="business2"><a href='/enterpreneour_info'><img className="" src={image10} height={'100px'} alt="" /></a></div>
                      <div className="business3"><a href='/innovation'><img className="" src={image10} height={'100px'} alt="" /></a></div>
                      <div className="business4"><a href='/international_marketing'><img className="" src={image10} height={'100px'} alt="" /></a></div>
                      <div className="business5"><a href='/it_info'><img className="" src={image10} height={'100px'} alt="" /></a></div>
                      <div className="business6"><a href='/marketing_learn'><img className="" src={image10} height={'100px'} alt="" /></a></div>
                      <div className="business7"><a href='/sales_info'><img className="" src={image10} height={'100px'} alt="" /></a></div>
                      <div className="business8"><a href='/strategy_info'><img className="" src={image10} height={'100px'} alt="" /></a></div>
                    </div>
                    </div>
                  </div>
                  <div className="collage5">
                    <img className="" src={image12} height={'90px'} alt="" />
                  </div>
                  <div className="collage12">
                    <img className="" src={image13} height={'85px'} alt="" />
                  </div>
                  <div className="collage13">
                    <img className="" src={image14} height={'90px'} alt="" />
                  </div>
                  <div className="collage14">
                    <div className="management1">
                    <img className="" src={image15} height={'95px'} alt="" />
                    <div className="it">
                      <div className="it1"><a href='/agile_info'><img className="" src={image15} height={'95px'} alt="" /></a></div>
                      <div className="it2"><a href='/analysis_content'><img className="" src={image15} height={'95px'} alt="" /></a></div>
                      <div className="it3"><a href='/artificial_info'><img className="" src={image15} height={'95px'} alt="" /></a></div>
                      <div className="it4"><a href='/computer_info'><img className="" src={image15} height={'95px'} alt="" /></a></div>
                      <div className="it5"><a href='/cyber_info'><img className="" src={image15} height={'95px'} alt="" /></a></div>
                      <div className="it6"><a href='/data_analysis_info'><img className="" src={image15} height={'95px'} alt="" /></a></div>
                      <div className="it7"><a href='/enterprises_info'><img className="" src={image15} height={'95px'} alt="" /></a></div>
                      <div className="it8"><a href='/iot_info'><img className="" src={image15} height={'95px'} alt="" /></a></div>
                      <div className="it9"><a href='/managing_info'><img className="" src={image15} height={'95px'} alt="" /></a></div>
                      <div className="it10"><a href='/mobileapp_info'><img className="" src={image15} height={'95px'} alt="" /></a></div>  
                      <div className="it11"><a href='/networking_info'><img className="" src={image15} height={'95px'} alt="" /></a></div>                 
                      <div className="it12"><a href='/system_development_info'><img className="" src={image15} height={'95px'} alt="" /></a></div>             
                    </div>
                    </div>
                  </div>
                  <div className="collage16">
                    <img className="" src={image11} height={'90px'} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center col-12">
              <div className="brain3">
                <img src={brain1} height={'83px'} alt="" />
                <div className="brain-center">
                  <img src={brain2} height={'120px'} alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <div className="brain">

          <div className="image2 position-relative"> <img src={brain2} height={'250px'} alt="" className="main" />
            <div className="brainimag7">
              <div className="collage">
                <img className="" src={image} height={'150px'} alt="" />
              </div>
              <div className="collage1">
                <img src={image16} height={'80px'} alt="" />
              </div>
              <div className="collage2">
                <img className="" src={image2} height={'150px'} alt="" />
              </div>

            </div></div>
          <div className="image5 position-relative"> <img src={brain5} height={'250px'} alt="" className="main" />
            <div className="brainimag6">
              <div className="collage3">
                <img className="" src={image10} height={'150px'} alt="" />
              </div>
              <div className="collage4">
                <img className="" src={image17} height={'80px'} alt="" />
              </div>
              <div className="collage5">
                <img className="" src={image12} height={'150px'} alt="" />
              </div>
            </div>
          </div>
          <div className=" position-relative">
            <span className="image3">
              <img src={brain3} height={'200px'} alt="" className="main" />
              <div className="brainimag5">
                <div className="collage6">
                  <img className="" src={image7} height={'150px'} alt="" />
                </div>
                <div className="collage7">
                  <img className="" src={image8} height={'150px'} alt="" />
                </div>
                <div className="collage8">
                  <img className="p-3" src={image9} height={'120px'} alt="" />
                </div>

              </div>
            </span>
          </div>
          <div className=" position-relative">
            <span className="image4">
              <img src={brain4} height={'180px'} alt="" className="main" />

              <div className="brainimag4">
                <div className="collage9">
                  <img className="" src={image3} height={'150px'} alt="" />
                </div>
                <div className="collage10">
                  <img className="" src={image5} height={'150px'} alt="" />
                </div>
                <div className="collage11">
                  <img className="" src={image6} height={'150px'} alt="" />
                </div>

              </div>
            </span>
          </div>

          <div className="image6 position-relative"> <img src={brain6} height={'150px'} alt="" className="main" />
            <div className="brainimag3">
              <div className="collage12">
                <img className="" src={image13} height={'150px'} alt="" />
              </div>
              <div className="collage13">
                <img className="" src={image14} height={'150px'} alt="" />
              </div>
              <div className="collage14">
                <img className="" src={image15} height={'150px'} alt="" />
              </div>
            </div></div>
          <div className="image7 position-relative"> <img src={brain7} height={'125px'} alt="" className="main" />
            <div className="brainimag2">
              <div className="collage15">
                <img className="" src={image1} height={'150px'} alt="" />
              </div>
              <div className="collage16">
                <img className="" src={image11} height={'150px'} alt="" />
              </div>
            </div>
          </div>
          <div className=" position-relative">
            <span className="image1">
              <img src={brain1} height={'340px'} alt="" className="main" />
              <div className="brainimag1">
                <img className="collage24" src={sam} height={'150px'} alt="" />
                <img className="collage25" src={sam1} height={'150px'} alt="" />
              </div>
            </span>
          </div>

        </div> */}



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