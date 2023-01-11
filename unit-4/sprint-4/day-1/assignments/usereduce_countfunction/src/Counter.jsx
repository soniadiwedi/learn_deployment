import { useContext } from "react";
import { useReducer } from "react";
import { CounterContext } from "./CounterContextProvider";
import { Actions } from "./CounterContextProvider";


//////////////////////////////////////////////
export default function Counter() {
   const {states,dispatch} =useContext(CounterContext)
    
    return (
        <>
            <h1>Counter</h1>
            <h3>{states.count}</h3> 
            <button onClick={()=>dispatch({type:Actions.INCREMENT, payload : 1})}>inc </button>
            <button disabled={states.count==0} onClick={()=>dispatch({type:Actions.DECREMENT, payload : 1})}>dec  </button>
            <button  onClick={()=>dispatch({type:Actions.RESET})}>reset  </button>
        </>
    )
};
