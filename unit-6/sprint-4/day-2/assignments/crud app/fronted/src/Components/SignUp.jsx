import { useState } from "react"

export default function SignUp() {
    const [email,setEmail]=useState("")
    const[password,setpass]=useState("")
    const[location,setlocation]=useState("")
    const[age,setage]=useState("")

    
    // const handleChange=(e)=>{
    //     const name=e.target.name;
    //     const val=e.target.value;
    //     setInput({...val,[name]:val})
    // }
  
    const hancleCLick=()=>{

    }
    return(
        <div>
            <h1>Registration page</h1>
            <label>Email</label>
            <input type="email"placeholder="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br />  
            <label>Password</label>
            <input type="password" placeholder="password" value={password} name="password" onChange={(e)=>setpass(e.target.value)}/>
                <br />
            <label>Location</label>
            <input type="text" placeholder="where are you from?" name="location" value={location} onChange={(e)=>setlocation(e.target.value)}/>
                <br />
            <label>Age</label>
            <input type="number" placeholder="enter your age" name="age" value={age} onChange={(e)=>setage(e.target.value)}/>
            <br />
            <button onClick={hancleCLick}>Submit</button>
        </div>
    )
};
