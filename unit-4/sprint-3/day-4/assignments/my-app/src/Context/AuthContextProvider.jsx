import { useState } from "react";
import { createContext } from "react";


const AuthCreate=createContext();

export default function AuthContextProvider({children}) {
    const[isAuth,setIsauth]=useState(true)
    const[token,settoken]=useState("")
    function Loginfun(token){
        setIsauth(true)
        settoken(token)
    }

    function LogOutfun(token){
        setIsauth(false)
        settoken("")
    }

    return (
        <>
        <AuthCreate.Provider value={{isAuth,LogOutfun,Loginfun,token}}>{children}</AuthCreate.Provider>
        </>
    )
};

export {AuthCreate}