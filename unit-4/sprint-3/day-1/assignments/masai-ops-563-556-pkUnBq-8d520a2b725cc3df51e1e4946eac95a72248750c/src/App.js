import React from 'react'
import Login from './Components/Login'
import { AuthCreate } from './Context/AuthContextProvider'
import { useContext } from 'react'
import { Dashboard } from './Components/Dashboard'
export default function App() {



  let {AuthToken,LogOutWithToken,isAuth,setloading,seterror,settoken}=useContext(AuthCreate)
  return isAuth?<Dashboard/>: (
    <div>
        <Login />
    </div>
  )
}
