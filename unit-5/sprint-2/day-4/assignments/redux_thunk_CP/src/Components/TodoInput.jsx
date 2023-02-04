import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { gettodoData, postTodo } from "../Redux/action";

//make a POST request (by dispatching the function), to save the data in db.json
//make a GET request (by dispatching the function), if the post request is successful, by chaining them together
const TodoInput = () => {
  const initial={
    title:"",
    status:false
  }
  const[todo,settodo]=useState(initial)
  
  
  const dispatch=useDispatch()
  
  const handleAddPost=()=>{
      dispatch(postTodo(todo)).then((res)=>{
        dispatch(gettodoData())
        settodo(initial)
      })
  }
  return (
    <div>
      <input
        data-testid="todo-input"
        value={todo.title}
        onChange={(e)=>settodo({...todo,title:e.target.value})}
      />
      <button data-testid="todo-add-btn" onClick={handleAddPost}>Add Todo </button>
     
    </div>
  );
};

export default TodoInput;
