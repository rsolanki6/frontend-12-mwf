import React from "react";
import Data from "./Data";
function EmployeeData(props) 
{
     return(
          <>
          
          {/* display employee data */}
               <h1 align="center">Employee Data</h1>
               <div className="app">
                         {/* Applied loop to fetch all dynamic data */}
                         {Data && Data.map((item) =>{
                              return(
                                   <div className="emp-grid">
                                        <p><img src={item.photo} alt="photo" /> </p>
                                        <p><b>Id is :</b>{item.id}</p>
                                        <p><b>Name is :</b>{item.name}</p>
                                        <p><b>Age is :</b>{item.age}</p>
                                        <p><b>Salary is :</b>{item.salary}</p>
                                   </div>
                              )
                         })}

               </div>
               
               
               
          {/* display only employee data who's age is greate than 24 years */}
               <h1 align="center">Employee Data who's age is greate than 24 years</h1>
               <div className="app">
                         {/* Applied loop to fetch all dynamic data */}
                         {Data && Data.filter((item) => item.age > 24).map((item) => {
                              return(
                                   <div className="emp-grid">
                                        <p><img src={item.photo} alt="photo" /> </p>
                                        <p><b>Id is :</b>{item.id}</p>
                                        <p><b>Name is :</b>{item.name}</p>
                                        <p><b>Age is :</b>{item.age}</p>
                                        <p><b>Salary is :</b>{item.salary}</p>
                                   </div>
                              )
                         })}
                   

               </div>
          
          
          {/* display only employee data who's salary is lower than 20000 */}
               <h1 align="center">Employee Data who's salary is lower than 20000</h1>
               <div className="app">
                         {/* Applied loop to fetch all dynamic data */}
                         {Data && Data.filter((item) => item.salary < 20000).map((item) => {
                              return(
                                   <div className="emp-grid">
                                        <p><img src={item.photo} alt="photo" /> </p>
                                        <p><b>Id is :</b>{item.id}</p>
                                        <p><b>Name is :</b>{item.name}</p>
                                        <p><b>Age is :</b>{item.age}</p>
                                        <p><b>Salary is :</b>{item.salary}</p>
                                   </div>
                              )
                         })}
                   

               </div>

          </>
     );
}
export default EmployeeData;