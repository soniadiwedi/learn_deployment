import React from "react";

import Addtodo from "./AddTodo";
import TodoItem from "./TodoItem";
function Todo(){
const [todos,setTodos]=React.useState([]);

function handleAddTodo(inputvalue){
  const NewItem={
    title:inputvalue,
    status:false,//it is completed or not
    id:Date.now()+inputvalue+Math.random()
  }
  const todoListAfterAddition=[...todos,NewItem];//creating new arr with new item
  setTodos(todoListAfterAddition);
  // console.log(todoListAfterAddition)
}


const handleDelete=(id)=>{
  const deleted=todos.filter((el)=>(el.id!==id)
  )
  setTodos(deleted)
}

const handleToggle=(id)=>{
  const updatedtodo=todos.map((el)=>(el.id===id?{...todos, status: !el.status}:el)
  );
  setTodos(updatedtodo)
}

 

//console.log(todos)
    return (
    <div>
     <Addtodo handleAddTodo={handleAddTodo}/>
      <div>
      
        {todos.map((el)=>{
        return  <TodoItem 
          key={el.id}
          id={el.id}
          title={el.title}
         status={el.status}
         handleToggle={handleToggle}
         handleDelete={handleDelete}
      />
        })}
      </div>
    </div>
    
    )
}

export default Todo;