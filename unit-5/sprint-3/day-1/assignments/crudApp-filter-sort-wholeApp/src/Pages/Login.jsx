import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginData } from "../Redux/AuthReducer/action";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const location =useLocation()
  
  function handleLogin() {
    let userdata = { email, password };
    dispatch(LoginData(userdata)).then(()=>{
      navigate (location.state)
    })

  }

  return (
    <div>
      <label htmlFor="">Email</label>
      <input
        type="email"
        value={email}
        style={{ border: "1px solid black" }}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <br />
      <label htmlFor="">Password</label>

      <input
        type="password"
        value={password}
        style={{ border: "1px solid black" }}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <br />
      <button onClick={handleLogin} style={{ border: "1px solid black" }}>
        Log In
      </button>
    </div>
  );
}
