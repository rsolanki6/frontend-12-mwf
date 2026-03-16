import React from "react";
import { FaPerson, FaIdBadge, FaBook, FaDollarSign } from "react-icons/fa6";
function IconApp(props)
{
     return(
          <>
          
               <div className="app">
                    <h1><FaPerson /> employee name : {props.name}</h1>
                    <h1><FaIdBadge /> employee id : {props.id}</h1>
                    <h1><FaBook /> employee department : {props.department}</h1>
                    <h1><FaDollarSign /> employee salary : {props.salary}</h1>
               </div>
          
          </>
     )
}

export default IconApp;