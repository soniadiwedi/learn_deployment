import React,{useEffect} from "react";
import { gettodoData } from "../Redux/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";


// just write the fetch/get the todos logic when the component mounts, in this component
const Todo = () => {
  

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(gettodoData)
  },[])
  return (
    <div>
      <h1>Todos</h1>
      {/* Import TodoInput component here */}
      <TodoInput/>
      {/* Import TodoList component here */}
      <TodoList/>
    </div>
  );
};

export default Todo;
