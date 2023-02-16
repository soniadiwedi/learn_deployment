import { patchTodo } from "./api";
import { Todo } from "./constatnt";


interface todoitemproptype extends Todo {
    handletoogles:()=> void 
}
export default function TodoItem({title,status,id,handletoogles}:todoitemproptype) {

const handletoggle=()=>{
    patchTodo(id).then(()=>{
        handletoogles()
    })
}

    return(
        <div>
            <p>{title}-------{status?"complete":"not complete"}</p>
            <button onClick={handletoggle}>Toggle</button>
        </div>
    )
};
