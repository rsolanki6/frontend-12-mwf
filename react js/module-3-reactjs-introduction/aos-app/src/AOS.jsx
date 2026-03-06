import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function AOS() {
     useEffect(() => {
          Aos.init({
               duration: 2000,
               once: false // repeat animations
          });
     }, []);

     return (

          <>
          
          <div className="main">
               <hr />
               <h1>FADE</h1>
               <hr />
          </div>

          <div className="app">

               <div className="box1" data-aos="fade-up">
                    <h3>data-aos="fade-up"</h3>
               </div>
               <div className="box2" data-aos="fade-down">
                    <h3>data-aos="fade-down"</h3>
               </div>

               <div className="box1" data-aos="fade-right">
                    <h3>data-aos="fade-right"</h3>
               </div>
               <div className="box2" data-aos="fade-left">
                    <h3>data-aos="fade-left"</h3>
               </div>

               <div className="box1" data-aos="fade-up-right">
                    <h3>data-aos="fade-up-right"</h3>
               </div>
               <div className="box2" data-aos="fade-down-left">
                    <h3>data-aos="fade-down-left"</h3>
               </div>

          </div>
          
          </>

          
     );
}

export default AOS;