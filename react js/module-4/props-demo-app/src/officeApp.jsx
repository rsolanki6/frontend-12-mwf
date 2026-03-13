import React from "react";
import { FaPerson, FaAddressCard, FaBookSkull, FaDollarSign, FaMapLocation } from "react-icons/fa6";
function OfficeApp({name, id, Address, salary})
{
     return(
          <>
          
               <div className="app">
                    <b><FaPerson /> Name: {name}</b>
                    <p><FaAddressCard /> ID: {id}</p>
                    {/* <p><FaBookSkull /> Department: {dep}</p> */}
                    <p><FaDollarSign /> Salary: {salary}</p>
                    <p><FaMapLocation /> Address: {Address}</p>
               </div>
          
          </>
     )
}

export default OfficeApp;