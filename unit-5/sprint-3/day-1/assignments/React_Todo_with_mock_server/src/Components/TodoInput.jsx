import React, { useState } from 'react'

const TodoInput = ({fetPost}) => {
const [obj,setobj]=useState({
    title:"",
    status:false
})
 const Handleinput=(e)=>{
 setobj({...obj,title:e.target.value})
 }
console.log(obj)
 const {title ,status}=obj
  return <>
   <input data-testid = "todo-input" type="text" onChange={Handleinput} value={title} />
   <button data-testid ="add-button" onClick={()=>{fetPost(obj)}} >Add Todo</button>
  </>
}
export default TodoInput