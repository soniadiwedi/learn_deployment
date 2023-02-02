import React from "react";
import { useState } from "react";
import { store } from "../Redux/store";
import Counter from "./Counter";

const CounterValue = () => {
  const {getState,dispatch,subscribe}=store
  const [forceRender,setforceRender]=useState(false)
  subscribe(()=>{
    setforceRender((pre)=>pre+1)
  })
   const counter = 0; //get the counter value from the Redux store
  return <div data-testid="counterValue">{getState().counter}</div>;
};

export default CounterValue;
