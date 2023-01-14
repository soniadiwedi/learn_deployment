
import './App.css';
import axios from  "axios"
import {useState,useEffect} from "react"



function Todo() {
  const[todo,setdoto]=useState([])

  useEffect(()=>{
     getTodo()
  },[])

 const getTodo=()=>{
  axios
  .get(`https://jsonplaceholder.typicode.com/todos`,{
    params:{
      userId:1
    }
  })
  .then((res)=>{
    setdoto(res.data)
    console.log(res.data)
  })
  }

  console.log(todo)

  return (
    <div >
      
    </div>
  );
}

export default Todo;
