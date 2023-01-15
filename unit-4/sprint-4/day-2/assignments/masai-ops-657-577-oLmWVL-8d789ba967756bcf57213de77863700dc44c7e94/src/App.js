import { useReducer, useState } from "react";
import "./App.css";
import {
  Box,Button,Center,Checkbox,FormControl,Heading,FormLabel,Input,Select, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
 TableContainer
  } from "@chakra-ui/react"
import { UserRow } from "./Component/UserRow";
const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  // console.log("state", state, "action",action)
  switch(action.type){
    case "name":return{...state,name:action.payload}
    case "gender":return{...state,gender:action.payload}
    case "role":return {...state,role:action.payload}
    case "maritalStatus":return{...state,maritalStatus:action.payload}
    case "reset": return{name:"",gender: "Male",role: "FrontEnd Developer",maritalStatus: false,}
    default : return state
  }
};

function App(){
  // note : Remove below const and instead import them from chakra import the following components from
  // const Box = () => <div />;
  // const Button = () => <div />;
  // const Center = () => <div />;
  // const Checkbox = () => <div />;
  // const FormControl = () => <div />;
  // const Heading = () => <div />;
  // const FormLabel = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // use Table Component from chakra ui to display the details
  // const TableContainer = () => <div />;

  // import and use the useReducer hook here, with the reducer function and the initialState.
  const[state,dispatch]=useReducer(reducer,initialState)
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);

  // function handleInput(e){
  //   console.log(e.target.type,e.target.value)
  //   if(e.target.type=="checked"){
  //     return dispatch(e.target.checked)
  //   }else{
  //     return dispatch(e.target.value)
  //   }
  // }

  function handleSubmit(e){
    e.preventDefault()
    // console.log(state)
    //let arr=[...submittedData,state]
    setSubmittedData((pre)=>{
      return [...pre,state]
    })
   
    dispatch({type:"reset",payload:{...initialState}})
  }

console.log(submittedData)
 
  return (
    <div className="App">
      <Heading as="h1">Login Form</Heading>
      <Box>
        <form data-testid="form-element" onSubmit={handleSubmit}>
          <FormControl >
            <FormLabel>Name</FormLabel>

            <Input type="text" name="name" onChange={(e)=>dispatch({type:"name",payload:e.target.value})} value={state.name}/>
            <FormLabel>Gender</FormLabel>
            <Select name="gender" data-testid="gender-select" onChange={(e)=>dispatch({type:"gender",payload:e.target.value})} value={state.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer Not to Say">Prefer Not to Say</option>
            </Select>
            <FormLabel>Role</FormLabel>
            <Select name="role" data-testid="role-select" onChange={(e)=>dispatch({type:"role",payload:e.target.value})} value={state.role}>
              <option value="FrontEnd Developer">FrontEnd Developer</option>
              <option value="BackEnd Developer">BackEnd Developer</option>
              <option value="FullStack Developer">FullStack Developer</option>
            </Select>

            <Checkbox name="maritalStatus" onChange={(e)=>dispatch({type:"maritalStatus",payload:e.target.checked})} checked={state.maritalStatus} >Married</Checkbox>
            <Center>
              <Button variant="solid" type="submit" >
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      
      </Box>
      <TableContainer>
      {
       submittedData.length>=1 ? 
        
          <Table>
            <Thead>
              <Tr>
                <Th>S.no</Th>
                <Th>User</Th>
                <Th>Gender</Th>
                <Th>Role</Th>
                <Th>Marial Status</Th>
              </Tr>
            </Thead>
            <Tbody>
             {
              submittedData.map((e,i)=>{
                return <UserRow key={i+1}   {...e}/>
              })
             }
            </Tbody>
          </Table>  
         :  <Heading data-testid="no-user-container">no users found</Heading>
                                                                                                    
       
       
      }
      </TableContainer>
      
        
      {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
     

    </div>
  );
    }
// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
