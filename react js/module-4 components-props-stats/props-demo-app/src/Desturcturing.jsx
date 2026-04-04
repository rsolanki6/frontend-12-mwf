import React from "react";
import {  FaPerson, FaEnvelope, FaPhone, FaHouseMedical, FaGraduationCap} from "react-icons/fa6";
function Destructuring({name, email,  contact_no, address, edu, })
{
     return(
          <>
          
               <div className="app">

                    {/* <h2> <FaPersonRifle /> Name : {name}</h2>
                    <h2> <FaIdCardClip /> ID : {id}</h2>
                    <h3> <FaGoogle /> Contact Us :  {contact} </h3> */}


                    <form id="form">
                         <p> <FaPerson /> Name: {name}</p>
                         <p> <FaEnvelope /> Email: {email}</p>
                         <p> <FaPhone /> Contact No: {contact_no}</p>
                         <p> <FaHouseMedical /> Address: {address}</p>
                         <p> <FaGraduationCap /> Education: {edu}</p>
                    </form>

               </div>
          
          </>
     );
}

export default Destructuring;