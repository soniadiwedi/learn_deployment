import { useEffect, useState } from "react";
import { deletetodos, getdata, postData } from "./api";
import { Todo } from "./contant";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { patchdata } from "./api";
export function TodoApp() {
   const [todo,settodo]=useState<Todo[]>([])
   const[change,setchange]=useState<Boolean>(false)


   const addnewtodo=(title:string)=>{
    //    settodo([...todo,newtodo])
    postData(title).then((res)=>{
        getdata().then((res)=>{
            settodo(res)
        })
    })
   }

   const toogle=(id:number,status:boolean)=>{
        patchdata(id,status).then((res)=>{
            getdata().then((res)=>{
                settodo(res)
            })
        })
   }

   const deleteTodo=(id:number)=>{
          deletetodos(id).then((res)=>{
            getdata().then((res)=>{
                settodo(res)
            })
          })
   }
   useEffect(()=>{
    getdata().then((res)=>{
        // console.log(res)
        settodo(res)
    })
   },[]) 

   console.log(todo);
    return (<>
        
            <h1>todo</h1>
            <TodoInput addnewtodo={addnewtodo}/>
           {
            todo?.map((el)=>{
                return <TodoItem  deleteTodo={ deleteTodo} toogle={toogle} key={el.id} {...el}/>
            })
           }
           
        </>
    )
};
