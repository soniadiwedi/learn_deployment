import { useState } from "react";

function Addtodo(properties){
    const[inputvalue,settext]=useState("")
    function handleChange(e){
      // console.log(e.target.value)
      settext(e.target.value)
  }
  
  function handleclick(){
    properties.handleAddTodo(inputvalue);
    settext("");
  }
  
    return (
      <div>    
      <input  value={inputvalue} placeholder="write todo" onChange={handleChange} />
      <button onClick={handleclick}>Add</button>    
      
    </div>
    )
  }
  


  export default Addtodo