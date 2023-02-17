import { title } from "process"
import { useState } from "react"
import { postData } from "./api"
import { Todo } from "./contant"

type addprop={
    addnewtodo:(a:string)=>void
}

export default function TodoInput({addnewtodo}:addprop) {
    const[item,setitem]=useState<string>("")


   
    const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       addnewtodo(item)
       setitem("")
    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setitem(e.target.value);
        
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
            <input onChange={handleChange} type="text" value={item} placeholder="write here todo" />
            <button>Add Todo</button>
            </form>
        </div>
    )
};
