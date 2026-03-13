import React from "react";
function App(props)
{
  return(
    <>
    
      <div className="app">
        <h1>Name is : {props.name}</h1>
        <h1>Age is : {props.age}</h1>
        <h1>Course is : {props.course}</h1>
      </div>
    
    </>
  )
}

export default App