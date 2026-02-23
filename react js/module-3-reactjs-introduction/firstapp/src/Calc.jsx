import React from "react";
import App from "./App";
const a = 10;
const b = 20;
const c = a + b;
const d = a - b;
const e = a * b;
const f = a / b;

function Calc() {
     return(
          <div className="app">
               <h1>Calculator App</h1>
               <h2>Addition of {a} and {b}: {c}</h2>
               <h2>Substraction of {a} and {b}: {d}</h2>
               <h2>Multiplication of {a} and {b}: {e}</h2>
               <h2>Division of {a} and {b}: {f}</h2>
          </div>
     )
}

export default Calc;