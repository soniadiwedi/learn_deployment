import { useEffect, useState } from "react"
import axios from "axios"
export default function Todo() {
    const [todo,setTodo]=useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        axios.get("http://localhost:8080/notes").then((res)=>setTodo(res.data)).catch((err)=>console.log(err))
        
    }

    console.log("todo",todo);
    return(
        <div>
            {
                todo.map((el)=>{
                    return (<h1>{el.title}</h1>)
                })
            }
        </div>
    )
};
