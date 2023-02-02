import React from "react";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";
import { store } from "../Redux/store";

const CounterButtons = () => {
  const {getState,dispatch}=store

  const handleadd=()=>{
    dispatch(handleAddActionObj(1))
    console.log(getState())
  }

  const handleReduce=()=>{
    dispatch(handleReduceActionObj(1))
    console.log(getState())
  }

  return (
    <div data-testid="counterButtons">
      <button onClick={handleadd} data-testid="addButton">ADD</button>
      <button onClick={handleReduce} data-testid="reduceButton">REDUCE</button>
    </div>
  );
};

export default CounterButtons;
