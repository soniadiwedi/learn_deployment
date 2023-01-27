import {useEffect, useState} from "react"

const useTimeout = (delay) => {
    const[ready,setReady]=useState(false)
    useEffect(()=>{
       let id=setInterval(()=>{
        setReady(true)
       },delay)
        return()=>{
            clearInterval(id)
        }
       
    },[])

    return ready
};

export default useTimeout;
