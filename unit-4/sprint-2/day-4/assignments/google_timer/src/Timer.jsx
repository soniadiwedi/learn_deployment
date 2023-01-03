import {useState,useRef,useEffect} from "react"


const minuteandsecond=(time)=>{
    const seconds=time%60;
    const minutes=Math.floor(time/60)%60;
    const hours=Math.floor((time/60)/60)
    console.log(new Date())
   return `${makingZero(hours)}: ${makingZero(minutes)} :${makingZero(seconds)} `
}
 const makingZero=(timevalue)=>{
    return timevalue<10 ? `0${timevalue}` : timevalue;
 }

/////////////////////////////////////////
function Timer(){
    const[count,setcount]=useState(3660);
    const timerRef=useRef(null)
    useEffect(()=>{
        const cleanUp=()=>{
            Stop()
        }
        return cleanUp
    },[])
/////////////////////////////////////////////
    function Start(){
        if(timerRef.current!=null){
            return
        }
     timerRef.current=setInterval(()=>{
            setcount((prev)=>{
                if(prev==1){
                    clearInterval(timerRef.current)
                    return 0
                }
                return prev-1
            })
        },1000)
    }
////////////////////////////////////////
    function Stop(){
        clearInterval(timerRef.current)
        timerRef.current=null
    }
    ///////////////////////////////////////
    function Reset (){
        Stop()
        setcount(0)
    }
    return(
        <div>
            
            <h1> {minuteandsecond(count)}</h1>
            <button onClick={Start}>Start</button>
            <button onClick={Stop}>Stop</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}


export default Timer