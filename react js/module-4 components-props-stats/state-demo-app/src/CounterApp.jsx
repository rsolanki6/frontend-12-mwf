import React,{useState} from "react";
function CounterApp()
{
     // desturcturing of state
     const [count,setCount] = useState(0);

     return(
          <>
          
               <div className="counter-app">
                    <h1>The count default value is: {count}</h1>
                    <button type="button" onClick={() => setCount(count+1)}>Increment</button>
                    <button type="button" onClick={() => setCount(count-1)}>Decrement</button>
                    <button type="button" onClick={() => setCount(0)}>Reset</button>
               </div>
          
          </>
     )

}


export default CounterApp;