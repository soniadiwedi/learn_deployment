import { useEffect } from "react";
import { useReducer } from "react";


export default function Reducer(state,action) {
   switch (action.type){
    case "INCREMENT_AMOUNT" : return {
            ...state,
            amount:action.amount+state.amount 
    }
    case "DECREMENT_AMOUNT" : return {
        ...state, amount:action.amount-state.amount
    }
    default :return {
        state
    }

    }
   }


//////////////////////////////////////////////////
export  function Cart() {

    let action={
        amount:500,
        type:"INCREMENT_AMOUNT"
    }

    const[state,dispatch]=useReducer(Reducer,{amount:100})

    useEffect(()=>{
        dispatch(action)
    },[])

    return (
        <>
        <h1>Total : {state.amount}</h1>
        </>
    )
   
};
