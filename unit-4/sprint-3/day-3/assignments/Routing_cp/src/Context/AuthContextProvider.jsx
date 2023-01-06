import {createContext,useState} from "react"

export const AuthContext = createContext()


const AuthContextProvider=({children})=>{
    const[isAuth,setIsAuth]=useState(true);        
    
    function loginpage(){
        setIsAuth(true)
    }

    function logoutpage(){
        setIsAuth(false)
    }

    return (
        <AuthContext.Provider value={{isAuth,loginpage,logoutpage}}>{children}</AuthContext.Provider> 
    )
}

export {AuthContextProvider}