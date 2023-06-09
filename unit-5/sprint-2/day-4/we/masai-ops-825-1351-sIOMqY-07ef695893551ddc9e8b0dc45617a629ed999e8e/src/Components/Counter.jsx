import React from "react";
import { useSelector } from "react-redux";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";
import  "./counter.css"
const Counter = () => {
  const theme=useSelector((store)=>{
    return store.themeReducer.theme
  })

  
  return (
    // the following div classname should be chnaged accrding to the theme
    <div data-testid="counter"   className={theme==="dark"?"dark_theme":"light_theme"}  >
      <h1>Counter</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue/>
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons/>
    </div>
  );
};

export default Counter;
