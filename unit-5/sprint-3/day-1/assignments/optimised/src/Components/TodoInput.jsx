import { useState } from "react";
import  Todo  from "./Todo";

const initial = [
  { id: 1, title: "task-1", status: false },
  { id: 2, title: "task-2", status: false },
  { id: 3, title: "task-3", status: false },
];

export const TodoInput = () => {
  const [title, settitle] = useState("");
  const [todo, settodos] = useState(initial);


  const addhandler=()=>{
    let newtodo={
        id:Date.now()+title,
        title,
        status:false,
    }
    settodos((prev)=>[...prev,newtodo])
    settitle("")
  }
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <button onClick={addhandler}>Add Todo</button>
      <br />
      {
        todo.map((el)=>{
            return <Todo key={el.id} {...el}/>
        })
      }
    </div>
  );
};
