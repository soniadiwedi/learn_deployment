
import './App.css';
import { useState,useRef } from 'react';

let initial={
  username:"",
  gender:"",
  role:"",
  maritalstatus:false
}
////////////////////////////////////////////
function App() {
const [formState,setFormState]=useState(initial)
const [user,setuser]=useState([]);
////////////////////////////////////////////
const handleChange=(e)=>{
  //e.preventDefault();
  const check=e.target.type==='checkbox'? e.target.checked : e.target.value 
  setFormState({...formState,[e.target.name]: check})
  
  console.log(e.target.checked)
}
console.log(formState)
////////////////////////////////////////////////////
const handleSubmit=(e)=>{
  e.preventDefault();
  setuser([...user,formState])
}
/////////////////////////////////////////////////////
  const {username,gender,role,maritalstatus}=formState
  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
        <h1>Forms</h1>
        <label>
          NAME
          <input type="text" placeholder='user name' name="username" value={username} onChange={handleChange}/>
        </label>
        <br  />
        <br  />

        <label>
          GENDER
         <select name='gender' value={gender} onChange={handleChange}>
          <option value='female'>Female</option>
          <option value='male'>Male</option>
         </select>
        </label>
        <br  />
        <br  />

        <label>
          ROLE
         <select name='role' value={role} onChange={handleChange}>
          <option value='manager'>Manager</option>
          <option value='helper'>Helper</option>
         </select>
        </label>
        <br  />
        <br  />
        <label>
          MARITAL STATUS
          <input type='checkbox' name="maritalstatus" checked={maritalstatus} onChange={handleChange}/>
        </label>
        <br  />
        <br  />

        <input type='submit'/>
     </form>
    </div>
  );
}

export default App;
