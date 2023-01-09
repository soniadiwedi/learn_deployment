import { useState } from "react";
import { createContext } from "react";



const initial={
    isAuth:false,
    token:null
}

const AuthContext=createContext();

function AuthContextProvider({children}) {
    // const[isAuth,setisAuth]=useState(false);
    // const[token,settoken]=useState(null)

    const[authstate,setauthstate]=useState(initial)

    function loginfun(valu){
       setauthstate({...authstate,isAuth:true,token:valu})
    }
    //---------------------------
    function logOutfun(){
        setauthstate(initial)
    }
    //--------------------

    return (
        <>
            <AuthContext.Provider value={{authstate,loginfun,logOutfun}}>{children}</AuthContext.Provider>
        </>
    )

}

export default AuthContextProvider;
export {AuthContext}
