import { useState } from "react"

export default function TodoInput({addTodoPost}) {
    const[text,setText]=useState("")
    const handleAdd=()=>{
        addTodoPost(text)
        setText("")
    }
    return(
        <div>
            <input type="text" placeholder="write todo here" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>

    )
};
