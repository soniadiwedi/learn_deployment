import React, { useState,useEffect } from 'react';
import TodoItem from "./TodoItem"


export const Todo = () => {

    const[posts,setpost]=useState([])
    const[loading,setloading]=useState(false);
    const[err,seterr]=useState(false);
    const [page,setpage]=useState(1);
    useEffect(()=>{
        fetchData(page)
    },[page]);


    const fetchData=async (page)=>{
        setloading(true)
        try{
            let res=await fetch(`https://odd-pink-hare-wig.cyclic.app/todos?_limit=10&_page=${page}`)
            if(res.ok){
                let data=await res.json()
                setpost(data)
                console.log(data)
                setloading(false)
            }
          
        }catch(err){
            console.log("err")
            seterr(true)
            setloading(false)
        }
    }

    //-------------------------------------------------------------
    if(loading){
        return <h2>Loading... Please wait.....</h2>
    }

    if(err){
        return <h2>Something went wrong !</h2>
    }

    //-----------------------------------------------------------------
    const handlePageChange=(val)=>{
        setpage((prev)=>prev+val)
    }
  
    return (
    <div>
        <h1>Posts</h1>
       
           {
           posts.map((el)=>{
            return <TodoItem key={el.id}{...el}/>
           })
           }
        <div>
            <button disabled={page==1} onClick={()=>handlePageChange(-1)}>Previous</button>
            <button disabled>{page}</button>
            <button onClick={()=>handlePageChange(+1)}>Next</button>
        </div>
    </div>
  )
}

export default Todo