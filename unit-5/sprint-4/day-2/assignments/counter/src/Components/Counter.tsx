import { useEffect, useState } from "react";
import CounterButton from "./CounterButton";

export default function Counter() {
    const[count,setcount]=useState <number>(10)

    const increasement=()=>{
      setcount((prev)=>prev+1)
    }
    
    const decreament=()=>{
        setcount((prev)=>prev-1)
    }

    return(
        <div>
            <h1>Counter : {count}</h1>
            <CounterButton decreament={decreament} increament={increasement}/>
        </div>
    )
};
