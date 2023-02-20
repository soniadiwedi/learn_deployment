import { useEffect, useState } from "react"
import { resultapi } from "../api"
import { nomination } from "../constants"

export default function Result() {
    const [result,setresult]=useState<nomination[]> ([])
    useEffect(()=>{
        resultapi().then((res)=>setresult(res.data))
    },[])
    return (
        <div>
           <div>
            {
                result.length>0 && 
                <div>
                    <div>
                        <h1>Winner</h1>
                        <img src={result[0].image} alt={result[0].name} />
                        <h4>Name:{result[0].name}</h4>
                        <p>Student code:{result[0].code}</p>
                        <p>Vote Counte:{result[0].vote}</p>
                    </div>
                    <div>
                        <h1>RunnerUp</h1>
                        <img src={result[1].image} alt={result[1].name} />
                        <h4>Name:{result[1].name}</h4>
                        <p>Student code:{result[1].code}</p>
                        <p>Vote Counte:{result[1].vote}</p>
                    </div>
                    <div>
                        <h1>3rd position</h1>
                        <img src={result[2].image} alt={result[2].name} />
                        <h4>Name:{result[2].name}</h4>
                        <p>Student code:{result[2].code}</p>
                        <p>Vote Counte:{result[2].vote}</p>
                    </div>
                </div>
            }
           </div>
        </div>
    )
};
