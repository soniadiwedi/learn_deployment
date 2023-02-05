import React from "react";
import {useDispatch} from "react-redux"
import { handleAdd, handleReduce } from "../Redux/action";
const CounterButtons = () => {

  const dispatch=useDispatch()
  const Add=()=>{
    dispatch(handleAdd(1))
  }

  const Reduce=()=>{
    dispatch(handleReduce(1))
  }
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={Add}>ADD</button>
      <button data-testid="reduceButton" onClick={Reduce}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
