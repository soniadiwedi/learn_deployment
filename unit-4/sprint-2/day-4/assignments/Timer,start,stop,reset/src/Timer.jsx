
import { useState,useEffect,useRef } from "react";
function Timer(){
    const [count,setCount] = useState(10);
    const timerRef = useRef(null) //with the help of Ref we store interval id
  ///-----------------StartTimer----------------------//

  useEffect(()=>{
    const cleanUp=()=>{
      stopTimer()
    }
    return cleanUp
  },[])

  const startTimer=()=>{
    if(timerRef.current!==null){  //when no interval is running the this function run
      return;
    }
      timerRef.current= setInterval(()=>{
        setCount((prev)=>{
          if(prev===1){
            clearInterval(timerRef.current)
            return 0
          }
           return prev-1
        })
       
      },1000)
  }
  ///-----------------StopTimer----------------------//
  const stopTimer =()=>{
      clearInterval(timerRef.current)
      timerRef.current=null;
  }
  //-----------------ResetTimer------------------------//
  const resetTimer=()=>{
    stopTimer()
    setCount(0)
  }
    return <div><h2>Timer  {count}</h2>
                
                <button onClick={startTimer}>Start </button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>

                </div>
  }

export default Timer;