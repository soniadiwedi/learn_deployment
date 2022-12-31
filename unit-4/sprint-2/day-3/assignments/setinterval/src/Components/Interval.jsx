import { useState, useEffect } from "react";

function Interval(){
const [time,settime]=useState(10);
useEffect(()=>{
   let time= setInterval(()=>{
        settime((prev)=>{
            if(prev===1){
                clearInterval(time)
                return 0
            }
            return prev-1
        })
        
    },1000)

},[])
return (
    <>
       <h1>Timer</h1>  
       <h3>Time::::: {time}</h3>
    </>
)
}


export default Interval;