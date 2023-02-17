import { patchdata } from "./api";
import { Todo } from "./contant";
interface todoprop extends Todo{
    toogle:(id:number,status:boolean)=>void;
    deleteTodo:(id:number)=>void
}
export default function TodoItem({id,title,status,toogle, deleteTodo}:todoprop) {
    const handleClick=(id:number,status:boolean)=>{
       toogle(id,status)
    }

    return (
        <div>
            <p>{title}----------{status?"completed":"not completed"}</p>
            <button onClick={()=>handleClick(id,status)}>Toggle</button>
            <button onClick={()=> deleteTodo(id)}>Delete</button>
        </div>
    )
};
