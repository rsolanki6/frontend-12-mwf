import React,{useState} from "react";
function NameApp()
{
     // desturcturing of state
     const [name,setName] = useState("Rohan Solanki");

     return(
          <>
          
               <div className="app">
                    <h1>My name is : {name}</h1>
                    <button type="button" onClick={()=> setName("John")}>Change Name</button>
               </div>
          
          </>
     )
}

export default NameApp;