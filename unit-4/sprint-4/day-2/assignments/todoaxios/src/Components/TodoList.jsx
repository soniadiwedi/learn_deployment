
import { useEffect } from "react";
import  { useState } from "react"
import TodoItem from "./TodoItem";
import getdata, { DeleteFun, postdata , Patchfun}  from "./Api"
import TodoCreate from "./TodoCreate";



export default function TodoList() {
    const[todo,setTodo]=useState([])
    const[loading,setloading]=useState(false)
    const[page,setpage]=useState(1)
    //////////////////////////////////////////
    let limit=10
   function fetchdata(){
        setloading(true)
        getdata({page,limit })
            .then((res)=>{
                setTodo(res.data)
                setloading(false)
                console.log(res.data)
            })
   }
   ////////////////////////////////////////////////////////////////////////// 
    useEffect(()=>{
        fetchdata(page)
    },[page])
/////////////////////////////////////////////////////////
    function addnew(data){
        postdata(data).then((res)=>{
            fetchdata()
        })
        
    }
////////////////////////////////////////////////////////
    function handledelete(id){
        DeleteFun(id)
        fetchdata()
    }
    console.log(todo)

    function handleToggle(id,status){
        console.log('hndl');
        Patchfun(id,status).then((res)=>{
            fetchdata()
        })

}

    return(
        loading? (<h1>Loading..........</h1>):
        <>
        <div>
            <TodoCreate addnew={addnew}/>
        </div>
        <div>
        {
            todo.map((el)=>{
                return <TodoItem key={el.id} handledelete={handledelete} handleToggle={handleToggle} {...el} />
                
            })
        }
    </div>
    </>
    )
};
