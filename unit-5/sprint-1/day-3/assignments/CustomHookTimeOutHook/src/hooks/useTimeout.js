import {useEffect, useState} from "react"

const useTimeout = (delay) => {
    const[show,setReady]=useState(false)
    useEffect(()=>{
       let id=setTimeout(()=>{
        setReady(true)
       },delay)
        return()=>{
            clearTimeout(id)
        }
       
    },[])

    return {ready:show}
};

export default useTimeout;
