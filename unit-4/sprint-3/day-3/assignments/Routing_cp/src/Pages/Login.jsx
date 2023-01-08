import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'

export default function Login() {

    const userDetails={
        email:"holt",
        password:"cityslicka"
      }

  const  {isAuth,loginpage,logoutpage}=useContext(AuthContext)
  const[input,setinput]=useState(userDetails)


  
  //--------------------------------------------
    function handleSubmit(e){
        e.preventDefault()
        fetchPost(input)
    }
//----------------------------------------------------
function getData(e){
    let {name,value}=e.target
    setinput({...input,[name]:value})
}
async function fetchPost(){
    try{
        let res=await fetch(`https://reqres.in/api/login`,{
            method:'POST',
            body:JSON.stringify(userDetails),
            headers:{
                'Content-Type': 'application/json' 
            }
        })
        let data=await res.json()
        //console.log(data.token)
        loginpage(data.token)
    }catch(err){

    }
}
//----------------------------------------------------
    if(isAuth){
        return <Navigate to='/'/>
    }
    return (
        <div>
            <form className = "auth_form" onSubmit={handleSubmit} >
                <input value={input.email} onChange={getData}
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input value={input.password} onChange={getData}
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