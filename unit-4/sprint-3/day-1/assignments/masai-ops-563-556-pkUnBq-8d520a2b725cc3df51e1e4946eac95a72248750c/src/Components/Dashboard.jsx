import React from 'react'
import { useContext } from 'react'
import { AuthCreate } from '../Context/AuthContextProvider'

export const Dashboard = () => {

    let {AuthToken,LogOutWithToken,isAuth,setloading,seterror,token,loading,error}=useContext(AuthCreate)
    return (
        <div >
            <h3 data-testid = "token" >Token: {token}</h3>
            <button data-testid = "logout" onClick={LogOutWithToken}>LOGOUT</button>
        </div>
    )
}
