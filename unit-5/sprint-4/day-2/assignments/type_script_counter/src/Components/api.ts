import axios ,{AxiosResponse} from "axios"

import { Todo } from "./constatnt"

export const getData=async()=>{
    let res:AxiosResponse<Todo[]>=await axios.get("http://localhost:8080/todos")
    return res.data
}


export const addTodo=async(title:string)=>{
    let res: AxiosResponse<Todo>=await axios.post("http://localhost:8080/todos",{
        title,
        status:false
    }
    )
    console.log(res.data);
    return res.data
}

export const deleteTodo=async(id:number)=>{
    let res=await axios.delete(`http://localhost:8080/todos/${id}`)
    return res
}

export const patchTodo=async(id:number)=>{
    let todo=await axios.get(`http://localhost:8080/todos/${id}`)
   console.log(todo.data.status);
 let newobj={status: !todo.data.status }

 let res=await axios.patch(`http://localhost:8080/todos/${id}`,newobj)
 return res
}