import React from "react";
function EmployeeApp(props)
{
     return(
          <>
          
               <div className="app">
                    <h1>employee name : {props.name}</h1>
                    <h1>employee id : {props.id}</h1>
                    <h1>employee department : {props.department}</h1>
                    <h1>employee salary : {props.salary}</h1>
               </div>
          
          </>
     )
}

export default EmployeeApp;