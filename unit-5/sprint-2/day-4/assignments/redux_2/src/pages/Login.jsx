import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginFailureAction, loginRequestAction, loginSuccesstAction } from "../Redux/Authentication/action"

export default function Login() {
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")  
    const dispatch=useDispatch()
const handlelogin=()=>{
    const userdata={email,password}
    dispatch(loginRequestAction())
    axios.post(`https://reqres.in/api/login`,userdata).then((res)=>{
        console.log(res.data)
        dispatch(loginSuccesstAction(res.data.token))
    }).cath((err)=>{
        console.log(err)
        dispatch(loginFailureAction())
    })
}
    return (
        <div>
            <h1>Login Here</h1>
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder="email"  />
            <input value={password} onChange={(e)=>setpassword(e.target.value)} type="text" placeholder="password"  />
            <button onClick={handlelogin}>Login</button>
        </div>
    )
};
