import React from "react";
function App(props)
{
  return(
    <>
    
      <div className="app">
        <h1>Hi this is a function component</h1>
        <p>My name is : {props.name}</p>
      </div>
    
    </>
  );
}