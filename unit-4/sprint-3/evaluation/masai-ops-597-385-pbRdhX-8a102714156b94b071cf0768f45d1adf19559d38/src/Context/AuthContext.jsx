import { useState } from "react";
import { createContext } from "react";

const AuthContext=createContext();

function AuthContextProvider({children}) {
    const[isAuth,setisAuth]=useState(false);
    const[token,settoken]=useState(null)

    function loginfun(token){
        setisAuth(true)
        settoken(token)
    }
    //---------------------------
    function logOutfun(token){
        setisAuth(false)
        settoken("")
    }
    //--------------------

    return (
        <>
            <AuthContext.Provider value={{isAuth,token,loginfun,logOutfun}}>{children}</AuthContext.Provider>
        </>
    )

}

export default AuthContextProvider;
export {AuthContext}
