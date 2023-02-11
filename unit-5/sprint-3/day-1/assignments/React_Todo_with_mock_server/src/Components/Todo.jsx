import { useEffect, useState } from "react";
import axios from "axios"
import TodoInput from "./TodoInput";
const Todos = () => {
  const [Todo,setTodo]=useState([])
  const fetchTodo=async()=>{
  let res=await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
  setTodo(res.data)
  }
useEffect(()=>{
  fetchTodo()
},[])
const fetPost=async(data)=>{
    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,data)
    .then((res)=>{fetchTodo()})
}
  return (
    <div>
      <TodoInput fetPost={fetPost} />
    {/* add TodoInput component here */}
<div data-testid = "todos-wrapper"

>

 {   Todo.map((el)=>{
   return <p key={el.id}>{el.title} - {el.status?"True":"False"} </p> 
  })}
    {/* map through the todos array and display the tasks */}
    </div>
  </div>
  );
};