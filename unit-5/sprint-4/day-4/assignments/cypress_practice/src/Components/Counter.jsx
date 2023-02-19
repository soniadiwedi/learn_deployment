import { useState } from "react";

export default function Counter() {
    const[count,setcount]=useState(0)

    return(
        <div className="App">
            <h1 className="counter_value">counter: {count}</h1>
            <button className="add_btn" onClick={()=>setcount((prev)=>prev+1)}>add</button>
            <button className="reduce_btn" onClick={()=>setcount((prev)=>prev-1)}>reduce</button>
        </div>
    )

};
