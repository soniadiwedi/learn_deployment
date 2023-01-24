import { useEffect } from "react"
import { useState } from "react"

export default function Counter() {
    const[count,setcount]=useState(0)

    // useEffect(()=>{
        
    //     setcount()
    // },[])

    const handleinc=(val)=>{
        setcount((pre)=>{
             return pre+val
        })

    }


    console.log(count);
    return(
        <>
        <h2 data-testid = "counter-header">Counter</h2>
        <h3 data-testid = "count">{count}</h3>
        <button data-testid = "add-btn" onClick={()=>handleinc(1)} >+</button>
        <button data-testid = "subtract-btn" onClick={()=>handleinc(-1)}>-</button>
        <button  data-testid = "double-btn" onClick={()=>setcount((pre)=>pre*2)}>Double</button>
        
        </>
    )
};
