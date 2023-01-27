import { useEffect, useState } from "react";

const useOnlineStatus = () => {

  
    const[isUserOnline,setisUserOnline]=useState(false)
    
    useEffect(()=>{
        if (navigator.onLine){
            setisUserOnline(true)
        }else{
            setisUserOnline(false)
        }
    },[])
     
    return isUserOnline
};

export default useOnlineStatus;
