import { useEffect, useState } from "react"
import { getData } from "./api"
import { Todo } from "./constatnt"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"



export default function TodoApp() {
    const[todo,settodo]=useState<Todo[]>([])
    const[toogle,settoogle]=useState<boolean>(false)

    const handletoogles=()=>{
        settoogle(prev=>!prev)
    }


    const onAdd=(newtodo:Todo)=>{
        settodo([...todo,newtodo])
    }

    useEffect(()=>{
        getData().then((res)=>{
            console.log(res);
            settodo(res)
        })
    },[toogle])

    return(
        <div>
            <TodoInput onAdd={onAdd}/>
          <h1>todo</h1>
          {
            todo.length>0 && todo.map((el)=>{
                return <TodoItem  handletoogles={handletoogles} key={el.id} {...el}/>
            })
          }
        </div>
    )
};
