import React from "react";
const a = 10;
const b = 20;
const c = a + b;
const d = a - b;
const e = a * b;
const f = a / b;
function Demo()
{
     return(
          <>
               <div className="app">
                    <h1> The Addition of ({a}, {b}) is {c} </h1>
                    <h1> The Subtraction of ({a}, {b}) is {d} </h1>
                    <h1> The Multiplication of ({a}, {b}) is {e} </h1>
                    <h1> The Division of ({a}, {b}) is {f} </h1>
               </div>
          </>
     )
}

export default Demo;