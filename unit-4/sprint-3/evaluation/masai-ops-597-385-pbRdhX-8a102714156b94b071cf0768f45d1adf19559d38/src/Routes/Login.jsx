import { useContext } from "react";
import { useState } from "react";
import { Link ,Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const user={
  email:"",
  password:""
}

function Login() {
  const [userid,setuser]=useState(user);
  const {authstate,loginfun,logOutfun}=useContext(AuthContext)
  const [boolean,setboolean]=useState(false);

  const handleChangefun=(e)=>{
    const{name,value}=e.target;
    setuser({...userid,[name]:value})
  }

  async function handleSubmitfun(e){
    setboolean(true)
    e.preventDefault()
    const url=`https://reqres.in/api/login`
    try{
      let res= await fetch (url,{
        method:'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({email:userid.email,password: userid.password})

      })
      let data=await res.json()
      if(data.token){
        loginfun(data.token)
      }else{
        alert("not found")
      }

      console.log(data)
    }catch(err){
          console.log(err.message)
    }
  }

  if(authstate.isAuth){
    return <Navigate to={"/dashboard"}/>
  }


  return (
    <div className="login-page">
      <form className="form" data-testid="login-form"  onSubmit={handleSubmitfun}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email"  name="email" value={userid.email} onChange={handleChangefun}/>
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              value={userid.password}
              onChange={handleChangefun}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
