import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  console.log("data",action)
  switch(action.type){
    case "name": return{...state, name:action.payload}
    case "gender": return{...state, gender:action.payload}
    case "role": return{...state, role:action.payload}
    case "maritalStatus": return{...state, maritalStatus:action.payload}
    case "reset": return{name:"",gender: "Male",role: "FrontEnd Developer",maritalStatus: false,}
   default :return state 
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
    const[state,dispatch]=useReducer(reducer,initialState)
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);

  // function handleInput(e){
  //   console.log(e.target.type,e.target.value)
  //   if(type=="checked"){
  //     dispatch({type:e.target.type,payload:e.target.checked})  
  //   }else{
  //     dispatch({type:e.target.type,payload:e.target.value})
  //   }  
  // }


  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(state)
    setSubmittedData((pre)=>{
      return [...pre,state]
    })
  dispatch({type:"reset",payload:initialState})
  }
  

 

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form onSubmit={handleSubmit} data-testid="form-element">
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input onChange={(e)=>dispatch({type:"name",payload:e.target.value})} value={state.name} name="name" type="text" placeholder="Name" />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select onChange={(e)=>dispatch({type:"gender",payload:e.target.value})} value={state.gender} name="gender" data-testid="gender-select">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option  value="Prefer Not to Say">Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select onChange={(e)=>dispatch({type:"role",payload:e.target.value})} value={state.role} name="role" data-testid="role-select">
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input onChange={(e)=>dispatch({type:"maritalStatus",payload:e.target.checked})} checked={state.maritalStatus} name="maritalStatus" type={"checkbox"} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
        {
          submittedData.length ? 
          <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>User</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Marial Status</th>
            </tr>
          </thead>
          <tbody>
          {
        submittedData.map((el,i)=>{
        return <UserRow id={i+1} name={el.name} role={el.role} maritalStatus={el.maritalStatus} gender={el.gender}/>
      })
    }
          </tbody>
        </table> : <h2 data-testid = "no-user-container">no users found</h2>
        }
            
        {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
        
      </div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export {reducer, initialState}
