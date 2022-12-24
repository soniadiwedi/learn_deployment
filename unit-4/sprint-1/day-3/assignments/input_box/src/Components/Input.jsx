import {useState} from "react"
function Input(){
const[todo,settodo]=useState("");
function handlechange(e){        //catching the input value
    //console.log(e.target.value)
        settodo(e.target.value)
    }

function Delete(){
    settodo("")
}
   



console.log(todo)
    return(
    <div>
        <div>
        <input placeholder="type" value={todo} onChange={handlechange}/>
        <button onClick={Delete} >Clear</button>
        
        </div>
        <div>
            <h2>{todo}</h2>
        </div>
    </div>
       
    )
}

export {Input}