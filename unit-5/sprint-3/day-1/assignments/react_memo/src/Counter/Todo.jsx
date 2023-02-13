import { useState } from "react";

export default function Todo() {
    const[todo,settodo]=useState([])

    const data=[
        {id:1,title:"task-1",status:false},
        {id:2,title:"task-2",status:false},
        {id:3,title:"task-3",status:false},
    ]

    const handleAdd=()=>{
        
    }

    return (
        <div>
            <input type="text" placeholder="write here todo" onChange={(e)=>settodo(e.target.value)}/>
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    )


};
