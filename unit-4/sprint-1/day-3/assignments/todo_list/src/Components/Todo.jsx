import React from "react";

function Todo(){
const[inputvalue,settext]=React.useState("")
const [todos,setTodos]=React.useState([]);

function handleChange(e){
    // console.log(e.target.value)
    settext(e.target.value)
}

function handleAddTodo(){
    const NewItem={
        title:inputvalue,
        status:false,
        id:Date.now()+inputvalue+Math.random()
    }
    const todoListAfterAddition=[...todos,NewItem];//creating new arr with new item
    setTodos(todoListAfterAddition)
}

  const newtodo=todos.map((el)=>{
    return (<li key={el.id}>{el.title}</li>)
  })

console.log(todos)
    return (
    <div>
      <div>    
        <input  value={inputvalue} placeholder="write todo" onChange={handleChange} />
        <button onClick={handleAddTodo}>Add</button>    
        
      </div>
      <div>
        <ul>{newtodo}</ul>
      </div>
    </div>
    
    )
}

export default Todo;