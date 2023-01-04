import React from 'react'
import { useState,useEffect,useContext } from 'react'
import{AuthCreate} from "../Context/AuthContextProvider"



export default function Login() {
    let initial={
        email:"",
        password:""
    }

    const[input,setinput]=useState(initial);
    const authvalue=useContext(AuthCreate);
    const {AuthToken,LogOutWithToken,setisAuth,setloading,seterror,settoken}=authvalue;
////////////////////////////////////////////////////////////////////////////////////////////////

const fetchData=async(loginOBJ)=>{
   setloading(true)
   console.log("line20",loginOBJ)
    try{
        let res=await fetch("https://reqres.in/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(loginOBJ)
        })
        console.log(res)
        let data=await res.json()
       console.log("line31",data)
       AuthToken(data)
       setloading(false)
    }catch(err){
        console.log(err)
        setloading(false)
        seterror(true)
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////
    // useEffect(()=>{
    //     fetchData()

    // },[])  

///////////////////////////////////////////////
function getData(e){
    console.log(e.target.name,e.target.value)
    let {name,value}=e.target;
    setinput({...input,[name]:value})
    
}
function handleSubmit(e){
    e.preventDefault();
    fetchData(input)
}
  
    return (
        <div>
            <form data-testid = "auth_form" onSubmit={handleSubmit} >
                <input onChange={getData}
                    name="email"
                    value={input.email}
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input
                 onChange={getData}
                name='password'
                value={input.password}
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input type = "submit" />

            </form>                
        </div>
    )
}
