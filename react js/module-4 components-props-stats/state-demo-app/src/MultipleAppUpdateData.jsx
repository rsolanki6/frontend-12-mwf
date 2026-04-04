import React,{useState} from "react";
function MultipleAppUpdateData()
{
     // destructuring of state
     const [name,setName] = useState({
          id:1,
          name:"Rohan Solanki",
          age:20,
          salary:50000,
          address:"150 feet ring road rajkot"
     });

     // create a function for multiple data update via state
     const upData=()=>{
          setName({
               id:1,
               name:"John",
               age:28,
               salary:95000,
               address:"150 feet ring road indira circle rajkot"
          })
     }



     return(
          <>
          
               <div className="app">

                    <h1>Employee Id is: {name.id}</h1>
                    <h2>Employee Name is: {name.name}</h2>
                    <h3>Employee Age is: {name.age}</h3>
                    <h4>Employee Salary is: {name.salary}</h4>
                    <h5>Employee Address is: {name.address}</h5>
                    <button type="button" onClick={upData}>Update Data</button>

               </div>

          </>
     )

}

export default MultipleAppUpdateData;