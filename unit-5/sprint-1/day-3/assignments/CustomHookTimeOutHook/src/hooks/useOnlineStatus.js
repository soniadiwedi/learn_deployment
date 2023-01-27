import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const[isUserOnline,setisUserOnline]=useState(false)
    useEffect(()=>{
        if (window.navigator.onLine){
            setisUserOnline(true)
        }else{
            setisUserOnline(false)
        }
    })
     
    return isUserOnline
};

export default useOnlineStatus;
