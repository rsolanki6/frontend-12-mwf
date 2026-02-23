import React from "react";
const name = "Rohan";
const age = 19;
const edu = "Diploma in Computer Engineering";

function HelloApp(){
     return(
            <div className="app">
               <h1>My Name is {name}</h1>
               <h1>My Age is {age}</h1>
               <h1>My Education is {edu}</h1>
            </div>
     )

}

export default HelloApp;