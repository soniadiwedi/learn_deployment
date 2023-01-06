import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'

export default function Login() {
  const  {isAuth,loginpage,logoutpage}=useContext(AuthContext)

    function handleSubmit(e){
        e.preventDefault()
        loginpage()
    }

    if(isAuth){
        return <Navigate to='/'/>
    }
    return (
        <div>
            <form className = "auth_form" onSubmit={handleSubmit} >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}