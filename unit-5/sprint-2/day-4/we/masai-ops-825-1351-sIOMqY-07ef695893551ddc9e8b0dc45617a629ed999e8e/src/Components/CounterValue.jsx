import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
  const data=useSelector((store)=>{
    // console.log(store.counterReducer.counter)
    return store.counterReducer.counter
  })
  return <div data-testid="counterValue">{data}</div>;
};

export default CounterValue;
