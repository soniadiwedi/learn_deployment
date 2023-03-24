export default function Login() {
   const handleChange=()=>{
    
   } 
    return (
        <div>
            <label>Email</label>
            <input type="email"placeholder="email" name="email" value={input.email} onChange={handleChange}/>
                <br />  
            <label>Password</label>
            <input type="password" placeholder="password" value={input.password} name="password" onChange={handleChange}/>
        </div>
    )
};
