
import { useState } from "react"
import { addTodo } from "./api";
import { Todo } from "./constatnt";


type TodoInputPropType={
    onAdd:(a:Todo)=>void
}
export default function TodoInput({onAdd}:TodoInputPropType) {
    const[title,setttile]=useState<string>("")

    const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        setttile(e.target.value)
    }
    
    const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      addTodo(title).then((res:Todo)=>{
        onAdd(res)
      })
      setttile("")
    }
    return(
        <div>
            <form onSubmit={handlesubmit} >
            <input type="text" onChange={handlechange} value={title}/>
           <button>add todo</button>

            </form>
            
        </div>
    )
};
