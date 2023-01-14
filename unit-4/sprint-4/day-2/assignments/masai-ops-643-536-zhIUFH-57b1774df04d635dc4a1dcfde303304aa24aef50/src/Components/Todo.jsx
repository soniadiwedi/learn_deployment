import axios from "axios";
import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";

const Todos = () => {
  const[item,setitem]=useState([])
  

  let initial={
    title:"",
    status:false
}

const[todo,settodo]=useState(initial);
  function fetchdata(){
    return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`) 
  }


  function CreateTodo(todo){
    axios({
        method:'post',
        url:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
        data:todo
    })
    fetchdata().then((res)=>{
      setitem(res.data)
    })
}
  console.log(item)

  useEffect(()=>{
    fetchdata().then((res)=>{
      setitem(res.data)
    })
  },[])


  return (
    <div>
      <TodoInput todo={todo} settodo={settodo} CreateTodo={CreateTodo}/>
    {/* add TodoInput component here */}
    {/* map through the todos array and display the tasks */}
    {
      item?.map((el)=>{
        return <div data-testid = "todos-wrapper" key={el.id}>
              <p>{el.title} - {el.status?"True":"False"}</p> 
               
                
        </div>
      })
    }
    </div>
  );
};

export default Todos;