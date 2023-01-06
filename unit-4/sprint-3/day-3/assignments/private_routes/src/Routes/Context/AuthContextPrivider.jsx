import { createContext, useState } from "react";


export const AuthContext= createContext()

function AuthContextProvider({children}) {
  const[isAuth,setisAuth]=useState(false)
    function login(){
        setisAuth(true)
    }

    function logout(){
        setisAuth(false)
    }

    return (
        <>
        <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
        </>
    )
};

export {AuthContextProvider};