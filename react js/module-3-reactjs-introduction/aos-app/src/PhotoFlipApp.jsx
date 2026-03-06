import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import parrot from "./parrot.jpg";
import rohan from "./rohan.jpg";
import "./index.css";

function FlipApp(){
     useEffect(()=> {
          Aos.init({
               duration:1000,
               repeat:true
          });
     },[])

     return(
          <>
          
               <div className="clearfix"></div>
               
               <div className="myapp">
                    <h1 align="center">Flip the Photo</h1>
                    <h2 align="center">↡</h2>
               </div>

               <div className="gallery-app" data-aos="flip-left">
                    <img src={rohan} alt="rohan" />
               </div>

               <div className="gallery-app" data-aos="flip-right">
                    <img src={parrot} alt="parrot" />
               </div>

               <div className="gallery-app" data-aos="zoom-in">
                    <img src={rohan} alt="rohan" />
               </div>

               <div className="gallery-app" data-aos="zoom-out">
                    <img src={parrot} alt="parrot" />
               </div>

               <div className="gallery-app" data-aos="fade-up">
                    <img src={rohan} alt="rohan" />
               </div>

               <div className="gallery-app" data-aos="fade-down">
                    <img src={parrot} alt="parrot" />
               </div>

          </>
     )

}

export default FlipApp;