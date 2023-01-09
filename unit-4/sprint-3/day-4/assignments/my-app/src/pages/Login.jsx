import { useState } from "react"
import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthCreate } from "../Context/AuthContextProvider"

export default function Login() {
    const {isAuth,LogOutfun,Loginfun}=useContext(AuthCreate)
    const[email,setemail]=useState("eve.holt@reqres.in");
    const[password,setpassword]=useState("cityslicka")
    const userDetails={
        email,
        password
    }
    function handleSubmit(){
       fetchPost()
    }
    ////////////////////////////////////////////
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
            Loginfun(data.token)
        }catch(err){

        }
    }
    ////////////////////////////////
    if(isAuth){
        return <Navigate to='/'/>
    }

    /////////////////////////////////////////
    return (
        <div>
            <input type="text" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)} />
            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
};
