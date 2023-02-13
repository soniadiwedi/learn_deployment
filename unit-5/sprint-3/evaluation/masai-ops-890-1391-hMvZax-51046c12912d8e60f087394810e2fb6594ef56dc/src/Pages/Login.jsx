import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

// Complete the logic do not remove any data-testid

export const Login = () => {
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location =useLocation()

  function handleLogin(){
    let user={email,password}
    dispatch(login(user)).then(()=>{
      navigate(location.state)
    })
  }

  return (
    <div>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={handleLogin}>Log In</button>
    </div>
  );
};
