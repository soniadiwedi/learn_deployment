import React, {useState,createContext} from 'react'
import App from '../App';

export const AuthCreate=createContext()

export default function AuthContextProvider({children}) {
  const[isAuth,setisAuth]=useState(false);
  const[loading,setloading]=useState(false);
  const[error,seterror]=useState(null);
  const[token,settoken]=useState("")

function AuthToken(data){
  setisAuth(true)
  settoken(data.token)
}
///////////////////////////////////////
function LogOutWithToken(){
  setisAuth(false)
  settoken("")
}

//////////////////////////////////////////////////////////////
  
  return (
    <div><AuthCreate.Provider value={{AuthToken,LogOutWithToken,isAuth,setloading,seterror,token,loading,error}}>{children}</AuthCreate.Provider>
    </div>
  )
}
